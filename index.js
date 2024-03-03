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
const options = document.querySelectorAll(".options-group");
let currentIndex = 0;

// slider
function showSlide(index) {
  previewImg.src = sliderItems[index];
  setActiveSlide();
}

function setActiveSlide() {
  slider.forEach((slide) => {
    slide.classList.remove("active-slide");
    if (slide.id == currentIndex) {
      slide.classList.add("active-slide");
    }
  });
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

// full screen
function full_view() {
  let src = previewImg.getAttribute("src");
  document
    .querySelector("#img-viewer")
    .querySelector("img")
    .setAttribute("src", src);
  document.querySelector("#img-viewer").style.display = "block";
}

function closeModal() {
  document.querySelector("#img-viewer").style.display = "none";
}

// product info

const buttons = document.querySelectorAll(".options-group .btn-option");
buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const isActive = this.classList.contains("btn-option-active");
    buttons.forEach((btn) => {
      btn.classList.remove("btn-option-active");
    });
    if (!isActive) {
      this.classList.add("btn-option-active");
    }
  });
});

function onCustomSizeOpen() {
  const customSize = document.querySelector("#product-width");
  console.log(customSize);
  customSize.classList.toggle("open");
}

showSlide(currentIndex);

// custom checkboxes
var checkboxes = document.querySelectorAll(
  '.product-options-group input[type="checkbox"]'
);

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      console.log("Checkbox with ID", this.id, "is checked.");
    } else {
      console.log("Checkbox with ID", this.id, "is unchecked.");
    }
  });
});
