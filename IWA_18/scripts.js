
/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event
 */

import { createOrderData, updateDragging,  } from "./data.js";
import { createOrderHtml, html, updateDraggingHtml } from "./view.js";

//This code defines a function that shows an overlay and closes it if the cancel button is clicked.
const handleHelpToggle = (event) => {
    const overlay = html.help.overlay;  
    overlay.show();
    if (event.target === html.help.cancel) 
        overlay.close();
};

//This code defines a function that focuses on an HTML element, displays an overlay, and resets a form when a specific cancel button is clicked.
  function handleAddToggle(event) {
    html.other.add.focus();
    const overlay = html.add.overlay;
    overlay.show();
    if (event.target === html.add.cancel) {
        overlay.close();
        html.add.form.reset();
    }
};

//This code defines a function that prevents the default form submission behavior.
function handleAddSubmit(event) {
    event.preventDefault();  
    const overlay = html.add.overlay;
    const formData = new FormData(event.target);  
    const data = Object.fromEntries(formData);
    const newData = createOrderData(data);
    const htmlData = createOrderHtml(newData);
    const append = document.querySelector('[data-area="ordered"]');  
    event.target.reset();
    overlay.close();
    append.appendChild(htmlData);
};

//this code defines a function that sets various HTML elemnts
function handleEditToggle(event) {
    const overlay = html.edit.overlay;
    const cancelBtn = html.edit.cancel;
    const input = html.edit.title;
    const select = html.edit.table;
    const option = html.edit.column;
    event.target.dataset.id ? overlay.show() : undefined;
    const id = event.target.dataset.id ? event.target.dataset.id : undefined;
    input.value = event.target.dataset.id
        ? event.target.querySelector(".order__title").textContent
        : undefined;
    select.value = event.target.dataset.id
        ? event.target.querySelector(".order__value").textContent
        : undefined;
    let section = document.querySelector(`[data-id="${id}"]`);
    option.value = section ? section.closest("section").dataset.area : "";
    if (event.target === cancelBtn) {
        overlay.close();
    }
    html.edit.delete.id = id;
};


// This function handles the form submission event when editing an existing order
function handleEditSubmit(event) {
    event.preventDefault();
    const idRemove = html.edit.delete.id;
    const orderDelete = document.querySelector(`[data-id="${idRemove}"]`);
    orderDelete.remove();
    const overlay = html.edit.overlay;
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newData = createOrderData(data);
    const htmlData = createOrderHtml(newData);
    const appended = document.querySelector(`[data-area="${newData.column}"]`);
    appended.appendChild(htmlData);
    event.target.reset();
    overlay.close();
};

function handleDelete(event) {
    const idToBeDeleted = html.edit.delete.id;
    const orderToBeDeleted = document.querySelector(
        `[data-id="${idToBeDeleted}"]`
    );
    const overlay = html.edit.overlay;
    orderToBeDeleted.remove();
    overlay.close();
};
// // Add event listeners for clicking the "Cancel" button 
html.add.cancel.addEventListener("click", handleAddToggle); //the "Add" button
html.other.add.addEventListener("click", handleAddToggle);
html.add.form.addEventListener("submit", handleAddSubmit);
html.other.grid.addEventListener("click", handleEditToggle);
html.edit.cancel.addEventListener("click", handleEditToggle); //submitting the "Edit Order" form
html.edit.form.addEventListener("submit", handleEditSubmit);
html.edit.delete.addEventListener("click", handleDelete);
html.help.cancel.addEventListener("click", handleHelpToggle); //the "Help" button
html.other.help.addEventListener("click", handleHelpToggle);

 //This code defines a function that prevents the default drag over behavior.
const handleDragOver = (event) => {  
    event.preventDefault();
    const path = event.path || event.composedPath();   
    let column = null;
    for (const element of path) {
        const { area } = element.dataset;
        if (area) {
            column = area;
            break;
        }
    }
    if (!column) return;  
    updateDragging({ over: column }); 
    updateDraggingHtml({ over: column });
};

//This code defines three functions.
let dragged;
const handleDragStart = (event) => { 
    dragged = event.target;//sets a global dragged variable to the event target during a drag start
};

const handleDragDrop = (event) => {
    event.target.append(dragged);//appends the dragged element to the event target during a drag drop
};

const handleDragEnd = (event) => {//one that removes the background color of the parent section element of the event target during a drag end.
    const background = event.target.closest("section");
    background.style.backgroundColor = "";
};

// Add event listeners to each HTML area element
for (const htmlArea of Object.values(html.area)) {   
    htmlArea.addEventListener("dragover", handleDragOver);
    htmlArea.addEventListener("dragstart", handleDragStart);
    htmlArea.addEventListener("drop", handleDragDrop);
    htmlArea.addEventListener("dragend", handleDragEnd);
}