

let menu1 = document.getElementById("menu1")
let menu2 = document.getElementById("menu2")
let menu3 = document.getElementById("menu3")
let menu4 = document.getElementById("menu4")
let menu5 = document.getElementById("menu5")


let grid1 = document.getElementById("grid1")
let grid2 = document.getElementById("grid2")
let grid3 = document.getElementById("grid3")
let grid4 = document.getElementById("grid4")
let grid5 = document.getElementById("grid5")


    grid1.style.display = "flex"
    grid2.style.display = "none"
    grid3.style.display = "none"
    grid4.style.display = "none"
    grid5.style.display = "none"
    
    
    menu1.style.borderBottom = "4px solid #2580c3"
    menu2.style.borderBottom = "4px solid transparent"
    menu3.style.borderBottom = "4px solid transparent"
    menu4.style.borderBottom = "4px solid transparent"
    menu5.style.borderBottom = "4px solid transparent"


function myFunction1() {
    grid1.style.display = "flex"
    grid2.style.display = "none"
    grid3.style.display = "none"
    grid4.style.display = "none"
    grid5.style.display = "none"
    
    
    menu1.style.borderBottom = "4px solid #2580c3"
    menu2.style.borderBottom = "4px solid transparent"
    menu3.style.borderBottom = "4px solid transparent"
    menu4.style.borderBottom = "4px solid transparent"
    menu5.style.borderBottom = "4px solid transparent"
}
function myFunction2() {
    grid1.style.display = "none"
    grid2.style.display = "flex"
    grid3.style.display = "none"
    grid4.style.display = "none"
    grid5.style.display = "none"
    
    
    menu1.style.borderBottom = "4px solid transparent"
    menu2.style.borderBottom = "4px solid #2580c3"
    menu3.style.borderBottom = "4px solid transparent"
    menu4.style.borderBottom = "4px solid transparent"
    menu5.style.borderBottom = "4px solid transparent"
}
function myFunction3() {
    grid1.style.display = "none"
    grid2.style.display = "none"
    grid3.style.display = "flex"
    grid4.style.display = "none"
    grid5.style.display = "none"
    
    
    menu1.style.borderBottom = "4px solid transparent"
    menu2.style.borderBottom = "4px solid transparent"
    menu3.style.borderBottom = "4px solid #2580c3"
    menu4.style.borderBottom = "4px solid transparent"
    menu5.style.borderBottom = "4px solid transparent"
}
function myFunction4() {
    grid1.style.display = "none"
    grid2.style.display = "none"
    grid3.style.display = "none"
    grid4.style.display = "flex"
    grid5.style.display = "none"
    
    
    menu1.style.borderBottom = "4px solid transparent"
    menu2.style.borderBottom = "4px solid transparent"
    menu3.style.borderBottom = "4px solid transparent"
    menu4.style.borderBottom = "4px solid #2580c3"
    menu5.style.borderBottom = "4px solid transparent"
}
function myFunction5() {
    grid1.style.display = "none"
    grid2.style.display = "none"
    grid3.style.display = "none"
    grid4.style.display = "none"
    grid5.style.display = "flex"
    
    
    menu1.style.borderBottom = "4px solid transparent"
    menu2.style.borderBottom = "4px solid transparent"
    menu3.style.borderBottom = "4px solid transparent"
    menu4.style.borderBottom = "4px solid transparent"
    menu5.style.borderBottom = "4px solid #2580c3"
}




var slideIndex = 1;
showSlides(slideIndex);

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
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}