$('.slider_container').slick({
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>'
});


$(".maxified ul li").on("click","a", function (event) {
    
        //отменяем стандартную обработку нажатия по ссылке
    
        event.preventDefault();
    
        //забираем идентификатор бока с атрибута href
    
        var id  = $(this).attr('href');
            
        //узнаем высоту от начала страницы до блока на который ссылается якорь
    
        var top = $(id).offset().top - 48;
    
        //анимируем переход на расстояние - top за 1500 мс
    
        $('body,html').animate({scrollTop: top}, 1500);
    
});

$(".promo .button_container .button").on("click","a", function (event) {
    
        //отменяем стандартную обработку нажатия по ссылке
    
        event.preventDefault();
    
        //забираем идентификатор бока с атрибута href
    
        var id  = $(this).attr('href');
            
        //узнаем высоту от начала страницы до блока на который ссылается якорь
    
        var top = $(id).offset().top - 48;
    
        //анимируем переход на расстояние - top за 1500 мс
    
        $('body,html').animate({scrollTop: top}, 1500);
    
});

$(".slider_container .button_container .button").on("click","a", function (event) {
    
        //отменяем стандартную обработку нажатия по ссылке
    
        event.preventDefault();
    
        //забираем идентификатор бока с атрибута href
    
        var id  = $(this).attr('href');
            
        //узнаем высоту от начала страницы до блока на который ссылается якорь
    
        var top = $(id).offset().top - 48;
    
        //анимируем переход на расстояние - top за 1500 мс
    
        $('body,html').animate({scrollTop: top}, 1500);
    
});

$(".easy_container .button_container .button").on("click","a", function (event) {
    
        //отменяем стандартную обработку нажатия по ссылке
    
        event.preventDefault();
    
        //забираем идентификатор бока с атрибута href
    
        var id  = $(this).attr('href');
            
        //узнаем высоту от начала страницы до блока на который ссылается якорь
    
        var top = $(id).offset().top - 48;
    
        //анимируем переход на расстояние - top за 1500 мс
    
        $('body,html').animate({scrollTop: top}, 1500);
    
});