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











$(document).ready(function () {
    var pertamaKali = true;
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
        
        pertamaKali = false;
    }, 6000);
    

    function cekanimhide()
    {
        var opa = $('.hide').css('opacity');
        if (opa == 0){
            console.log('selesai animasi hide');
            setTimeout(() => {
                selesaiHide = true;
            }, 1000);
            // clearInterval(terusajahide);
        } else {
            selesaiHide = false;
            console.log('tunggu hide');
        }
    }
    var terusajahide = setInterval(cekanimhide, 2000);

});