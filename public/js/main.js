$(function(){

  // Featured slider
  $('.featured-slider').slick({
    centerMode: true,
    centerPadding: '190px',
    slidesToShow: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          centerPadding: '90px'
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0',
          centerMode: false
        }
      }
    ]
  });

  $('.featured').find('.next-slide').on('click' , function(){
    $('.featured-slider').slick('slickNext');
  })

  $('.featured').find('.prev-slide').on('click' , function(){
    $('.featured-slider').slick('slickPrev');
  })

  // Offer slider
	$('.offer-slider').slick({
    centerMode: false,
    slidesToShow: 3,
    variableWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 915,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          variableWidth: false
        }
      }
    ]
  });

  $('.wrap-slider').find('.next-slide').on('click' , function(){
    $(this).closest('.wrap-slider').find('.offer-slider').slick('slickNext');
  })

});
