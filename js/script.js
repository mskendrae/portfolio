$(document).ready(function(){

    $('#slides').superslides({
      animation:'fade',
      play: 5000,
      pagination: false
    });

    var typed = new Typed(".typed", {
  		strings: ["Software Engineer", "Web Developer", "Graphic Designer"],
  		typeSpeed: 70,
  		loop: true,
  		startDelay: 2000,
  		showCursor: false
  	});

    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:3
            },
            768:{
                items:4
            },
            938:{
                items:5
            }
        }
    });


            var skillsTopOffset = $(".skillssection").offset().top;
            $(window).scroll(function(){
              if (window.pageYOffset > skillsTopOffset - $(window).height() + 200){
                $('.chart').easyPieChart({
                    easing: "easeInOut",
                    barColor: '#fff',
                    trackColor: false,
                    scaleColor: false,
                    lineWidth: 4,
                    size: 152,
                    onStep: function(from, to, percent){
                      $(this.el).find('.percent').text(Math.round(percent));
                    }
                });
              }

            });

            $("[data-fancybox]").fancybox();


});
