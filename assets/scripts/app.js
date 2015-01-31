$(document).on("scroll",function(){
	if($(document).scrollTop()>200){ 
		$("header").removeClass("full").addClass("small");
		}
	else{
		$("header").removeClass("small").addClass("full");
		}
	});


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
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $("html, body").animate({
          scrollTop: target.offset().top
        }, 3000);
        return false;
      }
    }
  });
});

$(document).ready(main);