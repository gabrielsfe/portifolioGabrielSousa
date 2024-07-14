// script.js

let modal = document.getElementById("myModal");
let modalImg = document.getElementById("img01");
let images = document.querySelectorAll(".produto img");
let currentIndex = 0;

images.forEach((img, index) => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        currentIndex = index;
    }
});

let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

function showImage(index) {
    if (index >= images.length) {
        index = 0;
    } else if (index < 0) {
        index = images.length - 1;
    }
    modalImg.src = images[index].src;
    currentIndex = index;
}

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.onclick = function() {
    showImage(currentIndex + 1);
}

prev.onclick = function() {
    showImage(currentIndex - 1);
}