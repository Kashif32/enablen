const OPTIONS = { loop: false }
const reviewsSliderNode = document.getElementById('reviews_section_slider');
const reviewsIndicatorsHolder = reviewsSliderNode.parentElement.querySelector("#reviews_slider_indicators");

const reviewsSliderCarousel = EmblaCarousel(reviewsSliderNode, OPTIONS)


const applyCurrentSlide = () => {
    const reviewsIndicators = reviewsIndicatorsHolder.children;
    for (let i = 0; i < reviewsIndicators.length; i++) {
        reviewsIndicators[i].classList.remove("active");
    }
    var _selectedIndicator = reviewsIndicators[reviewsSliderCarousel.selectedScrollSnap()]
    if (_selectedIndicator != undefined) {
        _selectedIndicator.classList.add("active");
    }
}

reviewsSliderCarousel
    .on('init', () => {
        applyCurrentSlide();
        for (let i = 0; i < reviewsSliderCarousel.slideNodes().length; i++) {
            var _indicator = document.createElement("div");
            _indicator.classList.add("indicator");
            _indicator.id = "review_item_indicator"
            if (i == reviewsSliderCarousel.selectedScrollSnap()) {
                _indicator.classList.add("active")
            }
            reviewsIndicatorsHolder.appendChild(_indicator)
            reviewsIndicatorsHolder.children[i].addEventListener("click", ()=> {
                reviewsSliderCarousel.scrollTo(i);
            })
        }
    })
    .on("select", applyCurrentSlide)
