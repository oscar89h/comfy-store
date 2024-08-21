import { getElement } from "./utils.js";

const sidebarOverlayCloseBtn = getElement(".sidebar-close");
const sidebarOverlayEl = getElement(".sidebar-overlay");
const toggleNavEl = getElement(".toggle-nav");

sidebarOverlayCloseBtn.addEventListener("click", closeXBtn);
toggleNavEl.addEventListener("click", openSidebar);

function closeXBtn() {
    this.parentElement.parentElement.classList.remove("show");
}

function openSidebar() {
    sidebarOverlayEl.classList.add("show");
}
