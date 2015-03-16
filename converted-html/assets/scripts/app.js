// $(document).on("scroll",function(){
// 	if($(document).scrollTop()>200){ 
// 		$("header").removeClass("full").addClass("small");
// 		}
// 	else{
// 		$("header").removeClass("small").addClass("full");
// 		}
// 	});

// Slide slider
var main = function() {
  
  $('.arrow-next').click(function(e) {
  	e.preventDefault();
  	console.log("clicado");
    var currentSlide = $(this).parents('.slider-nav').prev().find('.active-slide');
    var nextSlide = currentSlide.next();


    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide').css('display', 'none');
    nextSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  });


  $('.arrow-prev').click(function(e) {
  	e.preventDefault();
    var currentSlide = $(this).parents('.slider-nav').prev().find('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide').css('display', 'none');
    prevSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });

}

// Menu line-trough on scroll
$(document).ready(function () {
    $(document).on("scroll", onScroll);
 
    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
 
      $('a').each(function () {
        $(this).removeClass('active-menu');
      })
      $(this).addClass('active-menu');
 
      var target = this.hash;
      $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top+2
      }, 500, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
      });
    });
  });
 
  function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    $('nav a').each(function () {
      var currentLink = $(this);
      var refElement = $(currentLink.attr("href"));
      if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
        $('nav ul li a').removeClass("active-menu");
        currentLink.addClass("active-menu");
      }
      else{
        currentLink.removeClass("active-menu");
      }
    });
  }

$(function(){
      $(".job-description").typed({
        strings: ["Copywriter", "Empreendedor","Criativo"],
        typeSpeed: 1000,
        startDelay: 2,
        backSpeed: 0,
        backDelay: 500,
        loop: true,
        loopCount: 2,
        typeSpeed: 0
      });
  });




//teste
// $('nav a').on('click', function() {

//     var scrollAnchor = $(this).attr('data-scroll'),
//         scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top;

//     $('body,html').animate({
//         scrollTop: scrollPoint
//     }, 500);

//     return false;

// })


// $(window).scroll(function() {
//     var windscroll = $(window).scrollTop();
//     if (windscroll >= 100) {
       
//         $('.wrapper section').each(function(i) {
//             if ($(this).position().top <= windscroll - 20) {
//                 $('nav a.active').removeClass('active-menu');
//                 $('nav a').eq(i).addClass('active-menu');
//             }
//         });

//     } else {

       
//         $('nav a.active').removeClass('active-menu');
//         $('nav a:first').addClass('active-menu');
//     }

// }).scroll();

$(document).ready(main);