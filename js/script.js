//Xml title
var xml = "<?xml version = '1.0'?>" + "<head>Maklore</head>";
var parser = new DOMParser();
var xmlDoc = parser.parseFromString(xml, "text/xml");
var names = xmlDoc.getElementsByTagName("head");
var title = document.getElementsByTagName("title");
title[0].innerHTML = names[0].innerHTML;

//Slider
var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";

  if (dots.length) {
    dots[slideIndex - 1].className += " active";
  }
}