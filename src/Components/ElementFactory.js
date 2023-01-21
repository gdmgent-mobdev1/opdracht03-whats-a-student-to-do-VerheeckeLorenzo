import Authenticator from "../Auth/Authenticator";
import { DAYS } from "../Lib/consts";
import User from "../Models/User";
import Invite from "../Models/Invite";
const ElementFactory = {
    createContainer({ children = [], classNames = [], id = '', innerHTML = '', }) {
        const container = document.createElement('div');
        if (id)
            container.setAttribute('id', id);
        if (classNames.length) {
            container.classList.add(...classNames);
        }
        if (innerHTML)
            container.textContent = innerHTML;
        if (children.length) {
            children.forEach((child) => {
                if (child instanceof Element) {
                    container.appendChild(child);
                }
            });
        }
        return container;
    },
    createHeader({ headerText = '', user = new User(), invites = [], }) {
        const header = document.createElement('header');
        let avatarObject = null;
        const projectsIcon = this.createIcon({ classNames: ['fa', 'fa-project-diagram', 'header-icon'] });
        projectsIcon.onclick = () => window.location.replace('/dashboard');
        const userIcon = this.createIcon({ classNames: ['fa', 'fa-user', 'header-icon'] });
        userIcon.onclick = () => window.location.replace('/profile');
        const hasInvitesCircle = this.createContainer({
            classNames: ['has-invites-circle', 'hidden'],
        });
        const notificationIcon = this.createIcon({ classNames: ['fa', 'fa-bell', 'header-icon'] });
        const notificationList = this.createContainer({
            classNames: ['notification-list', 'hidden'],
        });
        if (invites.length > 0) {
            hasInvitesCircle.classList.remove('hidden');
        }
        notificationIcon.addEventListener('click', async () => {
            notificationList.classList.toggle('hidden');
            notificationList.innerHTML = '';
            invites.forEach((invite) => {
                const inviteElement = this.createContainer({
                    classNames: ['invite'],
                    children: [
                        this.createParagraph({
                            classNames: ['invite-title'],
                            text: `Invite from ${invite.from}`,
                        }),
                        this.createContainer({
                            classNames: ['invite-buttons'],
                            children: [
                                this.createButton({
                                    className: 'accept-invite',
                                    text: 'Accept',
                                    onClick: async () => {
                                        await Invite.acceptInvite(invite.id, invite.invitedTo, invite.to);
                                        window.location.replace('/dashboard');
                                    }
                                }),
                                this.createButton({
                                    className: 'decline-invite',
                                    text: 'Decline',
                                    onClick: async () => {
                                        await Invite.removeInvite(invite.id);
                                        window.location.replace('/dashboard');
                                    }
                                })
                            ]
                        })
                    ]
                });
                notificationList.appendChild(inviteElement);
            });
        });
        const bellContainer = this.createContainer({
            classNames: ['bell-container'],
            children: [notificationIcon, hasInvitesCircle, notificationList]
        });
        const logoutIcon = this.createIcon({ classNames: ['fa', 'fa-sign-out-alt', 'header-icon'] });
        logoutIcon.onclick = () => { Authenticator.logout(); };
        const iconsContainer = this.createContainer({ classNames: ['icons'], children: [projectsIcon, userIcon, bellContainer, logoutIcon] });
        if (user.avatar)
            avatarObject = this.createImage({ url: user.avatar, alt: "profile avatar", classNames: ['header-avatar'] });
        else
            avatarObject = this.createSpan({ text: user.username });
        const container = this.createNavbar({
            children: [this.createTitle({ size: 1, text: headerText, classNames: ['header-title'] }), this.createContainer({ classNames: ['header-options'], children: [iconsContainer, avatarObject] })],
        });
        header.appendChild(container);
        return header;
    },
    createParagraph({ text = '', classNames = [], children = [], }) {
        const p = document.createElement('p');
        if (text)
            p.textContent = text;
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
    createErrorBox({ textContent = '' }) {
        return this.createContainer({
            classNames: ['error', 'hidden'],
            innerHTML: textContent,
        });
    },
    createIcon({ classNames = [] }) {
        const i = document.createElement('i');
        if (classNames.length)
            i.classList.add(...classNames);
        return i;
    },
    createForm({ classNames = [], children = [] }) {
        const form = document.createElement('form');
        if (classNames.length)
            form.classList.add(...classNames);
        if (children.length) {
            children.forEach((child) => {
                if (child instanceof Element) {
                    form.appendChild(child);
                }
            });
        }
        return form;
    },
    createDropdown({ placeholder = "Select an option", classNames = [], options = [], children = [] }) {
        const dropdown = document.createElement('select');
        const defaultOption = document.createElement('option');
        defaultOption.disabled = true;
        defaultOption.selected = true;
        defaultOption.textContent = placeholder;
        dropdown.appendChild(defaultOption);
        if (classNames.length)
            dropdown.classList.add(...classNames);
        if (children.length) {
            children.forEach((child) => {
                if (child instanceof Element) {
                    dropdown.appendChild(child);
                }
            });
        }
        if (options.length) {
            options.forEach((option) => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                dropdown.appendChild(optionElement);
            });
        }
        return dropdown;
    },
    createFormValidation() {
        return this.createContainer({
            classNames: ['form-validation', 'hide'],
        });
    },
    createSpan({ classNames = [], text = '' }) {
        const span = document.createElement('span');
        if (classNames.length)
            span.classList.add(...classNames);
        span.textContent = text;
        return span;
    },
    createImage({ url = '', alt = '', classNames = [] }) {
        const img = document.createElement('img');
        if (url)
            img.src = url;
        if (alt)
            img.alt = alt;
        if (classNames.length)
            img.classList.add(...classNames);
        img.referrerPolicy = 'no-referrer';
        return img;
    },
    createSocialIcon({ name = '' }) {
        const image = document.createElement('img');
        if (name)
            image.src = `../src/assets/${name}.svg`;
        image.alt = `icon of ${name}`;
        return image;
    },
    createButton({ text = '', className = 'primary-button', onClick = null, children = [], }) {
        const button = document.createElement('button');
        button.classList.add(className);
        if (children.length) {
            children.forEach((child) => {
                if (child instanceof Element) {
                    button.appendChild(child);
                }
            });
        }
        if (text)
            button.textContent += text;
        if (onClick) {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                onClick();
            });
        }
        return button;
    },
    createLabel({ htmlFor = '', classNames = [], text = '', onClick = null, children = [] }) {
        const label = document.createElement('label');
        if (htmlFor)
            label.htmlFor = htmlFor;
        if (classNames.length)
            label.classList.add(...classNames);
        label.innerText = text;
        if (onClick) {
            label.addEventListener('click', (e) => {
                e.preventDefault();
                onClick();
            });
        }
        if (children.length)
            label.append(...children);
        return label;
    },
    createInput({ classNames = [], type = 'text', placeholder = '', name = '', value = '', id = '', accept = [], required = false, disabled = false, attribute = '', attributeValue = '', }) {
        const input = document.createElement('input');
        if (classNames.length)
            input.classList.add(...classNames);
        if (accept.length)
            input.setAttribute('accept', accept.join());
        if (type === 'datetime-local')
            input.min = new Date().toLocaleString();
        if (name)
            input.name = name;
        input.id = name;
        if (value)
            input.value = value;
        if (placeholder)
            input.placeholder = placeholder;
        if (id)
            input.id = id;
        if (attribute)
            input.setAttribute(attribute, attributeValue);
        input.disabled = disabled;
        input.required = required;
        input.type = type;
        return input;
    },
    createImageUploader({ name = '', id = '', circle = false, accept = [] }) {
        const cameraIcon = this.createIcon({ classNames: ['fas', 'fa-camera'] });
        const imageLabel = this.createLabel({
            htmlFor: id, classNames: ['image-uploader-label', 'flex-c-c'], children: [cameraIcon],
        });
        const input = this.createInput({
            classNames: ['image-input'], type: 'file', name, id, accept,
        });
        const iconContainer = this.createContainer({
            children: [imageLabel, input]
        });
        const className = circle ? "image-uploader-circle" : "image-uploader";
        const container = this.createContainer({
            classNames: [className],
            children: [iconContainer]
        });
        return container;
    },
    createLineBreak() { return document.createElement('hr'); },
    // Met een heel klein beetje hulp van chatGPT (voor tr structuur)
    createCalendar({ classNames = [] }) {
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
                }
                else if (day > daysInMonth) {
                    td.textContent = "";
                }
                else {
                    td.textContent = day.toString();
                    day === dayToday ? td.classList.add('calendar-today') : '';
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
    createTitle({ size = 1, text = '', classNames = [] }) {
        if (size < 0 || size > 6)
            return null;
        const title = document.createElement(`h${size}`);
        if (classNames.length)
            title.classList.add(...classNames);
        title.textContent = text;
        return title;
    },
    createLink({ href = '', text = '', children = [], classNames = [] }) {
        const a = document.createElement('a');
        a.href = href;
        if (text)
            a.textContent = text;
        if (children.length)
            a.append(...children);
        if (classNames.length)
            a.classList.add(...classNames);
        return a;
    },
    createList({ items = [] }) {
        const list = document.createElement('ul');
        items.forEach(({ text, href }) => {
            const li = document.createElement('li');
            if (!href) {
                li.textContent = text;
            }
            else {
                li.appendChild(this.createLink({
                    text,
                    href,
                }));
            }
            list.appendChild(li);
        });
        return list;
    },
    createNavbar({ children = [] }) {
        const navbar = document.createElement('nav');
        navbar.append(...children);
        return navbar;
    },
    createNavlist({ items = [] }) {
        const navlist = document.createElement('ul');
        items.forEach(({ text, href }) => {
            const li = document.createElement('li');
            if (!href) {
                li.textContent = text;
            }
            else {
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
