import Authenticator from "../Auth/Authenticator";
import { DAYS } from "../Lib/consts";
import Router from "../lib/router";
import User from "../Models/User";
import Notification from "./Notification";

const ElementFactory = {
  createContainer({
    children = [], classNames = [], id = '', innerHTML = '',
  }:{children?:any[], classNames?:string[], id?:string, innerHTML?:string}) {
    const container = document.createElement('div');
    if (id) container.setAttribute('id', id);
    if (classNames.length) {
      container.classList.add(...classNames);
    }
    if (innerHTML) container.textContent = innerHTML;
    if (children.length) {
      children.forEach((child:any) => {
        if (child instanceof Element) {
          container.appendChild(child);
        }
      });
    }
    return container;
  },

  createHeader({
    headerText = '',
    user = new User(),
  }:{headerText?:string, user?:User}) {
    const header = document.createElement('header');
    let avatarObject = null;
    const projectsIcon = this.createIcon({ classNames: ['fa', 'fa-project-diagram', 'header-icon'] });
    projectsIcon.onclick = () => window.location.replace('/dashboard');
    const userIcon = this.createIcon({ classNames: ['fa', 'fa-user', 'header-icon'] });
    userIcon.onclick = () => window.location.replace('/profile');
    const notificationIcon = this.createIcon({ classNames: ['fa', 'fa-bell', 'header-icon']})
    notificationIcon.onclick = () => {Notification.show()};
    const logoutIcon = this.createIcon({ classNames: ['fa', 'fa-sign-out-alt', 'header-icon']})
    logoutIcon.onclick = () => {Authenticator.logout()};
    const iconsContainer = this.createContainer({ classNames: ['icons'], children: [projectsIcon,userIcon, notificationIcon, logoutIcon] });
    if (user.avatar) avatarObject = this.createImage({url:user.avatar,alt:"profile avatar"});
    else avatarObject = this.createSpan({text:user.email[0]});
    const container = this.createNavbar({
      children: [this.createTitle({ size: 1, text: headerText, classNames:['header-title']})!, this.createContainer({ classNames: ['header-options'], children: [iconsContainer, avatarObject] })],
    });
    header.appendChild(container);
    return header;
  },

  createParagraph({
    text = '', classNames = [], children = [],
  }:{text?:string, classNames?:string[], children?:any[]}) {
    const p = document.createElement('p');
    if (text) p.textContent = text;
    if (classNames.length) {
      p.classList.add(...classNames);
    }
    if (children.length) {
      children.forEach((child) => {
        if (child instanceof Element) {
          p.appendChild(child);
        }
      });
    }
    return p;
  },

  createErrorBox({ textContent = '' }:{textContent:string}) {
    return this.createContainer({
      classNames: ['error', 'hidden'],
      innerHTML: textContent,
    });
  },

  createIcon({ classNames = [] }: {classNames?:string[]}) {
    const i = document.createElement('i');
    if (classNames.length) i.classList.add(...classNames);
    return i;
  },

  createForm({ classNames = [], children = [] }:
  { classNames?: string[], children: any[]}) {
    const form = document.createElement('form');
    if (classNames.length) form.classList.add(...classNames);
    if (children.length) {
      children.forEach((child) => {
        if (child instanceof Element) {
          form.appendChild(child);
        }
      });
    }
    return form;
  },

  createFormValidation() {
    return this.createContainer({
      classNames: ['form-validation', 'hide'],
    });
  },

  createSpan({ classNames = [], text = '' }) {
    const span = document.createElement('span');
    if (classNames.length) span.classList.add(...classNames);
    span.textContent = text;
    return span;
  },

  createImage({ url = '', alt = ''}:{url:string, alt:string}) {
    const img = document.createElement('img');
    if (url) img.src = url;
    if (alt) img.alt = alt;
    img.referrerPolicy = 'no-referrer';
    return img;
  },

  createSocialIcon({ name = '' }:{name:string}) {
    const image = document.createElement('img');
    if (name) image.src = `../src/assets/${name}.svg`; image.alt = `icon of ${name}`;
    return image;
  },

  createButton({
    text = '', className = 'button-white', onClick = null, children = [],
  }:{text:string, className?:string, onClick: any, children?:any[]}) {
    const button = document.createElement('button');
    button.classList.add(className);
    if (children.length) {
      children.forEach((child) => {
        if (child instanceof Element) {
          button.appendChild(child);
        }
      });
    }
    button.textContent += text;
    if (onClick) {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        onClick();
      });
    }
    return button;
  },

  createLabel({
    htmlFor = '', classNames = [], text = '', onClick = null, children = []
  }:{htmlFor?:string, classNames?:string[], text?:string, onClick?:any, children?:any[]}) {
    const label = document.createElement('label');
    if (htmlFor) label.htmlFor = htmlFor;
    if (classNames.length) label.classList.add(...classNames);
    label.innerText = text;
    if (onClick) {
      label.addEventListener('click', (e) => {
        e.preventDefault();
        onClick();
      });
    }
    if (children.length) label.append(...children);
    return label;
  },

  createInput({
    classNames = [], type = 'text', placeholder='',name = '', value = '', id = '', accept = [],required=false, disabled=false
  }:{classNames?:string[], type:string, placeholder?:string,name:string, value?:string, id?:string, accept?:string[],required?:boolean, disabled?:boolean}) {
    const input = document.createElement('input');
    if (classNames.length) input.classList.add(...classNames);
    if (accept.length) input.setAttribute('accept', accept.join());
    if (type === 'datetime-local') input.min = new Date().toLocaleString();
    if (name) input.name = name; input.id = name;
    if (value) input.value = value;
    if (placeholder) input.placeholder = placeholder;
    if (id) input.id = id;
    input.disabled = disabled;
    input.required = required;
    input.type = type;

    return input;
  },

  createImageUploader({ name = '', id = '', accept = [] }:{name:string, id?:string, accept?:string[]}) {
    const cameraIcon = this.createIcon({ classNames: ['fas', 'fa-camera'] });
    const imageLabel = this.createLabel({
      htmlFor: id, classNames: ['image-uploader-label','flex-c-c'], children: [cameraIcon],
    })
    const input = this.createInput({
      classNames: ['image-input'], type: 'file', name, id, accept,
    });


    const iconContainer = this.createContainer({
      children:[imageLabel, input]
    })
    
    const container = this.createContainer({
      classNames: ['image-uploader'],
      children: [iconContainer]
    })
    return container;
  },

  // Met een heel klein beetje hulp van chatGPT (voor tr structuur)
  createCalendar({classNames=[]}:{classNames:string[]}){
    const today = new Date();
    const dayToday = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    // Hoeveel dagen in de maand
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Wat is de eerste dag van de maand (0=maandag, 1=dinsdag, etc.)
    // We moeten ook eentje shiften, aangezien getDay() via UTC/Amerikaanse weektelling telt (0=zondag, 1=maandag, etc.)
    let y = new Date(year, month, 1).getDay();
    const firstDay = y === 0 ? 6 : y - 1;

    const table = document.createElement("table");

    // Table head
    const thead = document.createElement("thead");
    const firstRow = document.createElement("tr");
    for (const day of DAYS) {
      const th = document.createElement("th");
      th.textContent = day;
      firstRow.appendChild(th);
    }
    thead.appendChild(firstRow);
    table.appendChild(thead);

    // Table body
    const tbody = document.createElement("tbody");
    let tr;
    let day = 1; // Eerste dag van de maand begint altijd op 1
    for (let i = 0; i < 6; i++) {
      tr = document.createElement("tr");
      for (let j = 0; j < 7; j++) {
        const td = document.createElement("td");
        if (i === 0 && j < firstDay) {
          td.textContent = "";
        } else if (day > daysInMonth) {
          td.textContent = "";
        } else {
          td.textContent = day.toString();
          day===dayToday?td.classList.add('calendar-today'):'';
          day++;
        }
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
    table.classList.add(...classNames);
    table.appendChild(tbody);
    return table;
  },


  createAvatarInput({ name = '' }) {
    const input = this.createLabel({
      htmlFor: name,
      classNames: ['avatar-input'],
      children: [
        this.createInput({
          type: 'file', name, id: name, classNames: ['primary-input'],
        }),
        this.createContainer({
          classNames: ['avatar-input__container'],
          children: [
            this.createIcon({ classNames: ['fas', 'fa-camera', 'avatar-input__icon'] }),
          ],
        }),
      ],
    });
    return this.createContainer({
      classNames: ['input-container'],
      children: [input],
    });
  },


  createTitle({ size = 1, text = '', classNames = [] }:{size:number, text:string, classNames?:string[]}) {
    if (size < 0 || size > 6) return null;
    const title = document.createElement(`h${size}`);
    if (classNames.length) title.classList.add(...classNames);
    title.textContent = text;
    return title;
  },

  createLink({ href='', text = '', children = [], classNames=[] }: {href:string, text?:string, children?:Element[], classNames?:string[]}) {
    const a = document.createElement('a');
    a.href = href;
    if(text) a.textContent = text;
    if (children.length) a.append(...children);
    if (classNames.length) a.classList.add(...classNames);
    return a;
  },

  createList({ items = [] }) {
    const list = document.createElement('ul');
    items.forEach(({ text, href }) => {
      const li = document.createElement('li');
      if (!href) {
        li.textContent = text;
      } else {
        li.appendChild(this.createLink({
          text,
          href,
        }));
      }
      list.appendChild(li);
    });
    return list;
  },

  createNavbar({ children = [] }: {children:Element[]}) {
    const navbar = document.createElement('nav');
    navbar.append(...children);
    return navbar
  },

  createNavlist({ items = [] }: {items:{text:string, href:string}[]}) {
    const navlist = document.createElement('ul');
    items.forEach(({ text, href }) => {
      const li = document.createElement('li');
      if (!href) {
        li.textContent = text;
      } else {
        li.appendChild(this.createLink({
          text,
          href,
        }));
      }
      navlist.appendChild(li);
    });
    return navlist;
  },

};

export default ElementFactory;