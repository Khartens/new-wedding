$('.ag_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: true,
    infinite: true,
    centerPadding: '250px',
    responsive: [
        {
          breakpoint: 1820,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: true,
            centerPadding: '0',
          }
        },
        {
          breakpoint: 1270,
          settings: {
            centerMode: false,
            variableWidth: true
          }
        },
      ]
});