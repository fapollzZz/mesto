const popupOpenButton = document.querySelector('.profile__open-popup');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close');

let profileName = document.getElementById("profileName");
let profileAboutMe = document.getElementById("profileAbout");
let userName = document.getElementById("name");
let userDescription = document.getElementById("composition");
let form = document.querySelector(".popup__container")


function popupOpen() {
    popup.classList.toggle('popup__opened');
}

function popupClose() {
    popup.classList.toggle('popup__opened');
    userName.value = "Жак-Ив Кусто";
    profileName.value = "Жак-Ив Кусто";
    userDescription.value = "Исследователь океана";
    profileAboutMe.value = "Исследователь океана";
}

popupOpenButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);

function popupSave(evt) {
    evt.preventDefault();
    userName.textContent = userName.value;
    userDescription.textContent = userDescription.value;
    profileName.value = userName.textContent;
    profileAboutMe.value = userDescription.textContent;
    popupOpen();
}


form.addEventListener('submit', popupSave);
