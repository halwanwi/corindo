// SLIDESHOW DI HEADER
$(document).ready(function () {
    var pertamaKali = true;
    var cekUrutan = 2;
    var gambarSatu = $('#satu');
    var gambarDua = $('#dua');
    var gambarTiga = $('#tiga');
    let selesaiHide;
    
    setInterval(() => {
        const kelasSatu = $('#satu').attr('class');
        const kelasDua = $('#dua').attr('class');
        const kelasTiga = $('#tiga').attr('class');

        if (pertamaKali){
            $('#satu').attr('class', 'posisiHide hide');
            $('#dua').attr('class', 'posisiShow show');
            $('#tiga').attr('class', 'posisiAppear appear');
        }
        if (kelasSatu.includes('hide') && selesaiHide) {
            $('#satu').attr('class', 'posisiAppear appear');
            $('#dua').attr('class', 'posisiHide hide');
            $('#tiga').attr('class', 'posisiShow show');
        }
        else if(kelasSatu.includes('appear') && selesaiHide){
            $('#satu').attr('class', 'posisiShow show');
            $('#dua').attr('class', 'posisiAppear appear');
            $('#tiga').attr('class', 'posisiHide hide');
        }
        else if(kelasSatu.includes('show') && selesaiHide){
            $('#satu').attr('class', 'posisiHide hide');
            $('#dua').attr('class', 'posisiShow show');
            $('#tiga').attr('class', 'posisiAppear appear');
        }

        cekUrutan = 1;
        pertamaKali = false;
    }, 6000);
    

    setInterval(() => {
        var opa = $('.hide').css('opacity');
        if (opa == 0){
            setTimeout(() => {
                selesaiHide = true;
            }, 1000);
        } else {
            selesaiHide = false;
        }
    }, 2000);


    // Indicator


    setInterval(() => {
        if($('#satu').css('z-index') == cekUrutan){
            $('.indicatorSatu .tindic').addClass('Active');
        } else {
            $('.indicatorSatu .tindic').removeClass('Active');
        }
        if($('#dua').css('z-index') == cekUrutan){
            $('.indicatorDua .tindic').addClass('Active');
        } else {
            $('.indicatorDua .tindic').removeClass('Active');
        }
        if($('#tiga').css('z-index') == cekUrutan){
            $('.indicatorTiga .tindic').addClass('Active');
        } else {
            $('.indicatorTiga .tindic').removeClass('Active');
        }
    }, 1000);
    
    $('.indicatorSatu').click(function (e) { 
        e.preventDefault();
        $('#tiga').attr('class', 'posisiHide hide');
        $('#satu').attr('class', 'posisiShow show');
        $('#dua').attr('class', 'posisiAppear appear');
    });
    $('.indicatorDua').click(function (e) { 
        e.preventDefault();
        $('#satu').attr('class', 'posisiHide hide');
        $('#dua').attr('class', 'posisiShow show');
        $('#tiga').attr('class', 'posisiAppear appear');
    });
    $('.indicatorTiga').click(function (e) { 
        e.preventDefault();
        $('#dua').attr('class', 'posisiHide hide');
        $('#tiga').attr('class', 'posisiShow show');
        $('#satu').attr('class', 'posisiAppear appear');
    });


});
// AKHIR SLIDESHOW DI HEADER





// SLIDESHOW DI PRODUCT
const backProduct = $('.back');
let imageActive = 2;

$('.back').click(function (e) { 
    e.preventDefault();
    let imageBefore = imageActive +1;
    if (imageActive <= 1){ imageActive = 3 } else{ imageActive-- }
    console.log($('.product .container .slideShowProduct div:nth-child('+ imageActive +')'));
    $('.Kiri').removeClass('Kiri');
    $('.Kanan').addClass('Kiri');
    $('.Kanan').removeClass('Kanan zindex');
    $('.Aktif').addClass('Kanan zindex');
    $('.Aktif').removeClass('Aktif');
    $('.product .container .slideShowProduct div:nth-child('+ imageActive +')').toggleClass('Aktif');
    $('.content .product .container .slideShowProduct .slideProduct.Aktif').removeClass('zindex');
});
$('.next').click(function (e) { 
    e.preventDefault();
    if (imageActive >= 3){ imageActive = 1 } else{ imageActive++ }
    console.log($('.product .container .slideShowProduct div:nth-child('+ imageActive +')'));
    $('.Kanan').removeClass('Kanan');
    $('.Kiri').addClass('Kanan');
    $('.Kiri').removeClass('Kiri zindex');
    $('.Aktif').addClass('Kiri zindex');
    $('.Aktif').removeClass('Aktif');
    $('.product .container .slideShowProduct div:nth-child('+ imageActive +')').toggleClass('Aktif');
    $('.content .product .container .slideShowProduct .slideProduct.Aktif').removeClass('zindex');
});
// AKHIR SLIDESHOW DI PRODUCT











// $(document).keydown(function(e) { 
//     if(e.key == 'ArrowRight' && $('#dua').css('animation-name') == 'none'){
//         console.log('kanan');
//         // $('.hide').css({
//         //     'animation': 'slideHideImage 1s linear forwards'
//         // });
//         // $('.show').css({
//         //     'animation': 'slideShowImage 1s linear forwards'
//         // });
//         // $('.appear').css({
//         //     'animation': 'slideAppearImage 1s linear forwards'
//         // });
//     }
//     // else if(e.key == 'ArrowLeft' && $('.dua').css('animation-name') == 'none'){
//     //     console.log('kiri');
//     //     $('.dua').css({
//     //         'animation': 'slideShowImage 1s linear backwards alternate-reverse'
//     //     });
//     // }
//     // else {
//     //     console.log('di reset animasi');
//     //     $('.dua').css({
//     //         'animation': 'unset'
//     //     });
//     // }
// });

// console.log($('.dua').css('animation-name') == 'none');