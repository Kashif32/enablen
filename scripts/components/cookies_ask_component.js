const cookiesAskComponent = document.getElementById("cookies_ask_component");
const cookesDeclineBtn = cookiesAskComponent.querySelector("#cookies_decline_btn");
const cookesAcceptBtn = cookiesAskComponent.querySelector("#cookies_accept_btn");



window.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {
        cookiesAskComponent.style.display = "flex"
    }, 1000)



    cookesAcceptBtn.addEventListener("click", () => {
        cookiesAskComponent.remove();
    })
    cookesDeclineBtn.addEventListener("click", () => {
        cookiesAskComponent.remove();
    })

})

