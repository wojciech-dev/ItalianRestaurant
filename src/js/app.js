import "./components/Validation";
//variables
const hamburger = document.querySelector(".hamburger");
const nav_link = document.querySelectorAll(".nav_link");
const nav = document.querySelector(".nav");

//hamburger menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

//active menu
nav_link.forEach(item => {
  item.addEventListener("click", e => {
    e.preventDefault();
    nav.classList.remove("active");
    hamburger.classList.remove("active");
    const current = document.querySelector(".act");
    if (current) {
      current.className = current.className.replace("act", "");
    }
    e.target.className += " act";
  });
});

//lightbox
$(".gallery a").simpleLightbox();

//simple parralax
const parallax = () =>
  (document.querySelector(".header").style.top =
    window.pageYOffset * 0.5 + "px");

window.addEventListener("scroll", parallax);

//scroll to section
$(".nav_link").click(function(e) {
  e.preventDefault();
  $(".nav_link").removeClass("act");
  $(this).addClass("act");
  let position = $($(this).attr("href")).offset().top;
  $("body, html").animate({ scrollTop: position }, 800);
});
