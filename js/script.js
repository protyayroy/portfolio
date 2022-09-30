$(function ($) {
  'use strict'

  // typed.js
  var typ = new Typed(".type", {
    strings: ["Protyay Roy ...","a web designer and developer ..."],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });

// slider
  // $('.work-slider').slick({
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   dots: true,
  //   autoplay:true,
  // });
  // ///  WORK IMG ////
  $('.venobox').venobox({
    spinner: 'wave',
    spinColor: 'red',
    arrowsColor:'rgb(0, 156, 164)',
}); 


  // progress bar start

  $('svg.radial-progress').each(function (index, value) {
    $(this).find($('circle.complete')).removeAttr('style');
  });

  $(window).scroll(function () {
    $('svg.radial-progress').each(function (index, value) {
      if (
        $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
        $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
      ) {
        percent = $(value).data('percentage');
        radius = $(this).find($('circle.complete')).attr('r');
        circumference = 2 * Math.PI * radius;
        strokeDashOffset = circumference - ((percent * circumference) / 100);
        $(this).find($('circle.complete')).animate({ 'stroke-dashoffset': strokeDashOffset }, 1250);
      }
    });
  }).trigger('scroll');



  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function () {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
  // progress bar end



  // smooth scroll
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 2000, function () {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr('tabindex', '-1');
              $target.focus();
            };
          });
        }
      }
    });

    var measure = $("#about").offset().top;
    $(window).scroll(function(){
      var scroll = $(this).scrollTop();
      if(scroll > 500){
        $(".menu").addClass("menu-fix");
      } else {
        $(".menu").removeClass("menu-fix");
      }
    });

    var loaded = document.getElementById("preloader");
    window.addEventListener("load", function(){
      loaded.style.display = "none";
    })

})

// wow.js
new WOW().init();

