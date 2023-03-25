const blogsFilterCategoriesContainer = document.getElementById("blogs_filter_categories");
const blogsFilterCategories = blogsFilterCategoriesContainer.children;
const blogsFilterCategoriesScollContainer = blogsFilterCategoriesContainer.parentElement;
const filterCategoriesScrollNextBtn = document.getElementById("categories_next_scroll_btn");
const filterCategoriesScrollPrevBtn = document.getElementById("categories_prev_scroll_btn");





filterCategoriesScrollNextBtn.addEventListener("click", () => {
    filterCategoriesScrollPrevBtn.classList.remove("active");
    filterCategoriesScrollNextBtn.classList.add("active");
    blogsFilterCategoriesScollContainer.scrollBy({
        left: 200,
        top: 0,
        behavior: "smooth",
    })
})

filterCategoriesScrollPrevBtn.addEventListener("click", () => {
    filterCategoriesScrollNextBtn.classList.remove("active");
    filterCategoriesScrollPrevBtn.classList.add("active");
    blogsFilterCategoriesScollContainer.scrollBy({
        left: -200,
        top: 0,
        behavior: "smooth",
    })
})


for (let i = 0; i < blogsFilterCategories.length; i++) {
    blogsFilterCategories[i].addEventListener("click", () => {
        for (let j = 0; j < blogsFilterCategories.length; j++) {
            blogsFilterCategories[j].classList.remove("active");
        }
        blogsFilterCategories[i].classList.add("active");
    })
}

