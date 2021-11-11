(function ($) {

  "use strict";

    $(window).load(function(){
      $('.preloader').fadeOut(1000);   
    });


    $('.menu-burger').on('click', function() {
      $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
      $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
    });


    $('body').vegas({
        slides: [
            { src: 'images/slide-image01.jpg' },
            { src: 'images/slide-image02.jpg' }
        ],
        timer: false,
        transition: [ 'zoomOut', ]
    });

})(jQuery);
