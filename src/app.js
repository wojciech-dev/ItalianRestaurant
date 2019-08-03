const css = require('../scss/main.scss');

$(function(){
    // menu
    $(".icon").click(function(){
        $(this).toggleClass("active");
        if($(".icon").hasClass("active")) {
            $("nav").css({"clip-path" : "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", "left" : "0px"});
        } else {
            $("nav").css({"clip-path" : "polygon(0% 0%, 100% 0, 0% 100%, 0% 100%)", "left" : "-300px"});
        }
    })
    
    //close manu
    $(".close, nav a").click(function(){
        $(".icon").removeClass("active");
        $("nav").css({"clip-path" : "polygon(0% 0%, 100% 0, 0% 100%, 0% 100%)", "left" : "-300px"});
    })

    //przewijanie strony
    $("nav a").click(function(e) {
        e.preventDefault();
        $("nav a").removeClass("act");
        $(this).addClass("act");
        $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
        return false;
      });

    //slider
    $(".box.slide .left > img:gt(0)").hide();
    
    setInterval(function() {
        $('.box.slide .left > img:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('.box.slide .left');
        },  3000);
})


    //simple parralax
    var ypos,image;
    function parallax() {
        image = document.querySelector("section");
        ypos = window.pageYOffset;
        image.style.top = ypos * .7 + 'px';
    }
    window.addEventListener('scroll', parallax),false;
