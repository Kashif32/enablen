window.addEventListener("load", () => {
    const headerMenu = document.getElementById("header_menu");
    const menuExpandBtn = document.getElementById("header_menu_expand_btn");
    const menuCloseBtn = document.getElementById("header_menu_close_btn");
    const menuItems = headerMenu.querySelectorAll("#header_menu_item");



    for (let i = 0; i < menuItems.length; i++) {
        const menuItemDropI = menuItems[i].querySelector("i");
        if (menuItemDropI != null) {
            menuItemDropI.addEventListener("click", (e) => {
                menuItems[i].classList.toggle("active");
                for (let j = 0; j < menuItems.length; j++) {
                    if (i != j) {
                        menuItems[j].classList.remove("active");
                    }
                }
            })
        }

    }



    menuExpandBtn.addEventListener("click", () => {
        headerMenu.classList.toggle("active")
    })
    menuCloseBtn.addEventListener("click", () => {
        headerMenu.classList.remove("active")
    })
})

