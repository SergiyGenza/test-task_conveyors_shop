const sliderItems = [
  "assets/conveyor-01.png",
  "assets/conveyor-02.png",
  "assets/conveyor-03.png",
  "assets/conveyor-04.png",
  "assets/conveyor-05.png",
];

const previewImg = document.querySelector("#preview");
const prevButtons = document.querySelectorAll(".btn-slide.prev");
const nextButtons = document.querySelectorAll(".btn-slide.next");
const slider = document.querySelectorAll(".slider-item img");

let currentIndex = 0;

function showSlide(index) {
  previewImg.src = sliderItems[index];
  setActiveSlide();
}

prevButtons.forEach((prevButton) => {
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
    showSlide(currentIndex);
  });
});

nextButtons.forEach((nextButton) => {
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % sliderItems.length;
    showSlide(currentIndex);
  });
});

function full_view() {
  let src = previewImg.getAttribute("src");
  document
    .querySelector("#img-viewer")
    .querySelector("img")
    .setAttribute("src", src);
  document.querySelector("#img-viewer").style.display = "block";
}

function close_model() {
  document.querySelector("#img-viewer").style.display = "none";
}

function setActiveSlide() {
  slider.forEach((slide) => {
    slide.classList.remove("active-slide");
    if (slide.id == currentIndex) {
      slide.classList.add("active-slide");
    }
  });
}

showSlide(currentIndex);
