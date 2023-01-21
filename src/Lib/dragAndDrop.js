export function dragstartHandler(ev) {
    // Add the target element's id to the data transfer object
    if (ev.target instanceof HTMLElement && ev.dataTransfer != null) {
        ev.dataTransfer.setData('text/plain', ev.target.id);
        ev.dataTransfer.dropEffect = 'move';
    }
}
export function dragoverHandler(ev) {
    if (ev instanceof DragEvent && (ev.dataTransfer != null)) {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = 'move';
    }
}
export function dropHandler(ev) {
    if (ev instanceof DragEvent && (ev.dataTransfer != null)) {
        ev.preventDefault();
        // Get the id of the target and add the moved element to the target's DOM
        const data = ev.dataTransfer.getData('text/plain');
        ev.target.appendChild(document.querySelector(`#${data}`));
    }
}
