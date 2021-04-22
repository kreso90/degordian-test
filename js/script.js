var openMenu = document.querySelector(".nav__hamburger");
var navMenu = document.querySelector(".nav__menu");
var closeMenu = document.querySelector(".close");
var dropdown = document.querySelector(".dropdown");
var body = document.querySelector("body");

openMenu.addEventListener("click", function(){
    navMenu.classList.toggle("open");
    this.classList.toggle("open")
    body.classList.add("overflow")
})

closeMenu.addEventListener("click", function(){
    navMenu.classList.remove("open");
    openMenu.classList.remove("open");
    body.classList.remove("overflow")
})

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    dropdown.addEventListener("click", function(){
        this.classList.toggle("open");
    })
}


var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


var acc = document.getElementsByClassName("accordion__button");
var accClose = document.getElementsByClassName("accordion__close");
var accContent = document.getElementsByClassName("accordion__content");
var accWrapper = document.getElementsByClassName("accordian__wrapper");
var i,j;
  
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
 
    var accordionContent = this.nextElementSibling;
    if (accordionContent.style.maxHeight) {
      accordionContent.style.maxHeight = null;
    } else {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    }
  });
}

for (i = 0; i < accWrapper.length; i++) {
  accWrapper[i].addEventListener("click", function() {
    this.classList.toggle("active");
  });
}

for (j = 0; j < accClose.length; j++) {
  accClose[j].addEventListener("click", function() {
    for (j = 0; j < accContent.length; j++) {
      accContent[j].style.maxHeight = null;
    }
  });
}

function scrollToTop() {
  window.scroll({top: 0, left: 0, behavior: 'smooth'});
}

