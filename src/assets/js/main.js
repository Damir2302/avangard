$(document).ready(function() {

    // Header mobile menu::Start
    $('.header__burger').on('click', function() {
        $('.header__nav').addClass('mobile-menu')
        $('body').addClass('overflow-hidden')
    })

    $('.close-menu').on('click', function() {
        $('.header__nav').removeClass('mobile-menu')
        $('body').removeClass('overflow-hidden')
    })

    $('.nav-toggle').on('click', function() {
        $(this).parent().parent().find('.nav__submenu').slideToggle()
    })
    // Header mobile menu::End

    // Header scroll::Start
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > $('header').height()) {
          $('header').addClass('header-fixed')
        } else if ($(window).scrollTop() == 0) {
          $('header').removeClass('header-fixed')
          $('header').removeClass('header-backscroll')
        }
    })

    let lastScrollTop = 0;
    $(window).scroll(function(){
        let currentScroll = $(this).scrollTop()
        if (currentScroll > lastScrollTop){
            $('.header-fixed').removeClass('header-backscroll')
        } else {
            $('.header-fixed').addClass('header-backscroll')
        }
        lastScrollTop = currentScroll
    })
    // Header scroll::End
});