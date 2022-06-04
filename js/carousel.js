let gov_slideIndex = 1
let gov_slideTimeOut = setTimeout(()=>gov_plusSlides(1), 3000)
gov_showSlides(gov_slideIndex)

// Next/previous controls
function gov_plusSlides(n) {
  gov_showSlides(gov_slideIndex += n);
}

// Thumbnail image controls
function gov_currentSlide(n) {
  gov_showSlides(gov_slideIndex = n);
}

function gov_showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("gov-slides");
  let dots = document.getElementsByClassName("gov-dot");
  if (n > slides.length) {gov_slideIndex = 1}
  if (n < 1) {gov_slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[gov_slideIndex-1].style.display = "block";
  dots[gov_slideIndex-1].className += " active";
  clearTimeout(gov_slideTimeOut)
  gov_slideTimeOut = setTimeout(()=>gov_plusSlides(1), 5000)
}

let com_slideIndex = 1
let com_slideTimeOut = setTimeout(()=>com_plusSlides(1), 3000)
com_showSlides(com_slideIndex)

// Next/previous controls
function com_plusSlides(n) {
  com_showSlides(com_slideIndex += n);
}

// Thumbnail image controls
function com_currentSlide(n) {
  com_showSlides(com_slideIndex = n);
}

function com_showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("com-slides");
  let dots = document.getElementsByClassName("com-dot");
  if (n > slides.length) {com_slideIndex = 1}
  if (n < 1) {com_slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[com_slideIndex-1].style.display = "block";
  dots[com_slideIndex-1].className += " active";
  clearTimeout(com_slideTimeOut)
  com_slideTimeOut = setTimeout(()=>com_plusSlides(1), 5000)
}

