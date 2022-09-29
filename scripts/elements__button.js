const like = document.querySelector(".elements__button");


function clickButton() {
    like.classList.toggle("active");

}

like.addEventListener("click", clickButton);
