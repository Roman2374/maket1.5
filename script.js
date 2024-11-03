var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let openReadMore = document.querySelector(".readMore");
let closeMore = document.querySelector(".closeMore");
let brend_hide = document.querySelectorAll(".brend_hide");
let brend_hideFullscrine = document.querySelectorAll(".brend_hideFullscrine");

openReadMore.addEventListener("click", function () {
  openReadMore.style.display = "none";
  closeMore.style.display = "block";

  if (window.innerWidth >= 1120) {
    for (let i = 0; i < brend_hideFullscrine.length; i++) {
      brend_hideFullscrine[i].style.display = "flex";
    }
  } else {
    for (let i = 0; i < brend_hide.length; i++) {
      brend_hide[i].style.display = "flex";
    }
  }
});

closeMore.addEventListener("click", function () {
  openReadMore.style.display = "block";
  closeMore.style.display = "none";

  if (window.innerWidth >= 1120) {
    for (let i = 0; i < brend_hideFullscrine.length; i++) {
      brend_hideFullscrine[i].style.display = "none";
    }
  } else {
    for (let i = 0; i < brend_hide.length; i++) {
      brend_hide[i].style.display = "none";
    }
  }
});
