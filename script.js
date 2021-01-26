$(document).ready(function(){
    // по клику меняется подчеркиание в nav
    $('.nav-link a').on('click', function(){
            $('.nav-link a').removeClass('active');
            $(this).addClass('active');
     });

     // по клику открывается меню для экранов меньше 768px
     $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.nav').toggleClass('open-menu');
    });
    
    // по клику на ссылку меню для экранов меньше 768px меню закрыается и крест становитс бургером опять
    $('.nav-link a').click(function() {
        $('.nav').toggleClass('open-menu');
        $('.menu-burger__header').toggleClass('open-menu');
    });

    // по скролу вниз появляется стрелка, в самом верху - пропадает
    $('.up').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.up').fadeIn();
        } else {
            $('.up').fadeOut();
        }
    });
    // по клику на стрелочку вверх, прокрутка на самый верх
    $(function(){
         $('.up').click(function () {
    	 $('body,html').animate({
            scrollTop: 0
        }, 100);
        });
    });

});
// отзывы
$(document).ready(function() {

    let pics =[""https://hsto.org/files/ec5/592/f1e/ec5592f1e814401eb38305682a8e88d4.jpg", ""https://hsto.org/files/ec5/592/f1e/ec5592f1e814401eb38305682a8e88d4.jpg", "https://hsto.org/files/ec5/592/f1e/ec5592f1e814401eb38305682a8e88d4.jpg", "https://hsto.org/files/ec5/592/f1e/ec5592f1e814401eb38305682a8e88d4.jpg"];
    let slideNow = 0;
    let navBtnId = 0;
    let translateWidth = 0;
//    для правой кнопки
    $('#next-btn').click(function(a) {
        a.preventDefault();
        slideNow=slideNow+1;
        if(slideNow==pics.length) {
            slideNow=0;
        }
        slide(slideNow);   
    });
//    для левой кнопки
    $('#prev-btn').click(function(a) {
        a.preventDefault();
        slideNow=slideNow-1;
        if(slideNow<0) {
            slideNow=pics.length-1;
        }
        slide(slideNow);
    });
//    для кружков
    $('.slide-nav-btn').click(function () {
        $('.slide-nav-btn').removeClass('act');
        $(this).addClass('act');
        navBtnId = $(this).index();
        if (navBtnId + 1 != slideNow) {
            slide(navBtnId);
            slideNow = navBtnId + 1;
        }
    
    });

    function slide(x) {
        translateWidth = -$('#viewport').width() * (x);
        $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
    };

  
    
    
});

