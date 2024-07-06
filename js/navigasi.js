$(window).scroll(function () {
    const topScroll = $(window).scrollTop();
    if(topScroll >20){
        // console.log('ganti nav style');
        // $('nav').css('background-color', 'rgb(28, 28, 46)');
        // $('nav .container .logo img').css('width', '38px');
        $('nav').addClass('navScroll');
    }
    else {
        // $('nav .container .logo img').css('width', '54px');
        // $('nav').css('background-color', 'rgba(0, 0, 0, 0)');
        $('nav').removeClass('navScroll');
    }
});


$('.mobile-menu .menu').click(function (e) { 
    e.preventDefault();
    $('nav .link').toggleClass('Aktif');
    $('nav .container').toggleClass('ShadowLink');
    $('.menu').toggleClass('bi-x-lg');
});