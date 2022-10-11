const like = document.querySelector(".elements__button");


function clickButton() {
    like.classList.toggle("elements__like_active");

}

like.addEventListener("click", clickButton);
