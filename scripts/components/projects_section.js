const projectsList = document.querySelectorAll(".project_item");

for (let i = 0; i < projectsList.length; i++) {
    projectsList[i].addEventListener("click", ()=> {
        projectPopupContainer.style.display = "flex"
    })
}


