$(function () {
    'use strict'


    // menu fix start

    let menuOff = $('#main_menu').offset().top;

    $(window).scroll(function () {
        let scrolling = $(this).scrollTop();

        if (scrolling > menuOff) {
            $('#main_menu').addClass('fix_menu')
        } else {
            $('#main_menu').removeClass('fix_menu')
        }

    });

    // menu fix end



    // top to back button start

    $('#bc_top').click(function(){
        $('body, html').animate({
            scrollTop: 0,
        }, 2000)
    });


    $(window).scroll(function () {
        let scrolling = $(this).scrollTop()

        if (scrolling > 200) {
            $('#bc_top').fadeIn()
        } else {
            $('#bc_top').fadeOut()
        }
    });
    // top to back button end




});