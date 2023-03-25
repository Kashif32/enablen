window.addEventListener("load", () => {
    const footerLinksHeadings = document.querySelector("footer").querySelectorAll("#footer_links_container");

    for (let i = 0; i < footerLinksHeadings.length; i++) {
        footerLinksHeadings[i].querySelector("#footer_links_container_heading").addEventListener("click", () => {
            footerLinksHeadings[i].classList.toggle("links_expanded");
            for (let j = 0; j < footerLinksHeadings.length; j++) {
                if (i != j) {
                    footerLinksHeadings[j].classList.remove("links_expanded");
                }
            }
        })
    }
})
