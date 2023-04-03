const flagHint = document.querySelector('.hint-flag');
const sizeHint = document.querySelector('.hint-size');
const parent = document.querySelector(".container-clues-feed");

flagHint.addEventListener('click', () => {
    let hintReview = document.createElement("img");
    hintReview.src = "../images/flag.svg";
    hintReview.className = "box-review";
    parent.insertAdjacentElement("beforeend", hintReview);
});

sizeHint.addEventListener('click', () => {
    let hintReview = document.createElement("img");
    hintReview.src = "../images/size.svg";
    hintReview.className = "box-review";
    parent.insertAdjacentElement("beforeend", hintReview);
});