const projectPopupContainer = document.getElementById("project_popup_container");
const projectPopupComponent = document.getElementById("project_popup_component");
const popupComponentCloseBtn = projectPopupComponent.querySelector("#project_popup_close_btn");

window.addEventListener("DOMContentLoaded", () => {
    popupComponentCloseBtn.addEventListener("click", () => {
        projectPopupContainer.style.display = "none";
    })
    projectPopupContainer.addEventListener("click", ()=> {
        projectPopupContainer.style.display = "none"
    })
})




