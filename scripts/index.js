

const tabsList = document.querySelectorAll("#solutions_tab_item");




function setupHomeCarousel() {
    // const setupProgressBar = (emblaApi, progressNode) => {
    //     const applyProgress = () => {
    //         const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
    //         progressNode.style.width = `${progress * 100}%`
    //     }
    //     const removeProgress = () => {
    //         progressNode.style.width = '0%'
    //     }
    //     return {
    //         applyProgress,
    //         removeProgress,
    //     }
    // }

    const OPTIONS = { loop: true }
    const homeSliderNode = document.getElementById('home_sldier');
    const progressNode = document.getElementById('home_sider_progress_bar');
    const homeSliderPrevBtn = document.getElementById("home_slider_prev_btn");
    const homeSliderNextBtn = document.getElementById("home_slider_next_btn");
    const homeSliderCurSlideNum = document.getElementById("home_slider_cur_slide_num");

    const homeSliderCarousel = EmblaCarousel(homeSliderNode, OPTIONS)
    // const { applyProgress, removeProgress } = setupProgressBar(
    //     homeSliderCarousel,
    //     progressNode,
    // )

    homeSliderNextBtn.onclick = homeSliderCarousel.scrollNext
    homeSliderPrevBtn.onclick = homeSliderCarousel.scrollPrev

    const applyCurrentSlideNum = () => {
        const _value = homeSliderCarousel.selectedScrollSnap() + 1
        if (_value < 10) homeSliderCurSlideNum.innerText = "0" + _value
        else homeSliderCurSlideNum.innerText = _value

    }


    const applyProgress = ()=> {
        const maxSlides = homeSliderCarousel.slideNodes().length;
        const currentSlide = homeSliderCarousel.selectedScrollSnap()+1;
        const progress = (currentSlide / maxSlides) * 100;
        progressNode.style.width = `${progress}%`;
    }

    homeSliderCarousel
        .on('init', () => {
            applyProgress();
            applyCurrentSlideNum();
        })
        .on('reInit', applyProgress)
        .on('scroll', applyProgress)
        .on('destroy', applyProgress)
        .on("select", applyCurrentSlideNum)
}








function setSolutionsTabview() {
    var solutionsTabviewContainer = document.getElementById('solutions_tabview_container');

    for (let i = 0; i < tabsList.length; i++) {
        tabsList[i].addEventListener("click", (e) => {
            for (let j = 0; j < tabsList.length; j++) {
                tabsList[j].classList.remove("active");
            }
            tabsList[i].classList.add("active");
            const tabViewRef = e.target.getAttribute("data-tabview-ref")
            for (let j = 0; j < solutionsTabviewContainer.children.length; j++) {
                const _tabView = solutionsTabviewContainer.children[j]
                if (_tabView.id == tabViewRef) {
                    _tabView.classList.add("active");
                }
                else {
                    _tabView.classList.remove("active")
                }
            }
        })
    }
}

setSolutionsTabview();
setupHomeCarousel();



