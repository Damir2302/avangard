////////////////////////////////////////
/////// КАРТОЧКА ТОВАРА
////////////////////////////////////////

// Слайдер
var swiper = new Swiper('.b-product__slider-container', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 20,

    breakpoints: {
        740: {
            direction: 'vertical',
        }
    }
})

// Спальное место
$('.b-block-properties-has-child .b-block-properties-public__value').on('click', function() {

    if (!$(this).hasClass('select__val')) {
        $(this).addClass('select__val')
        $('.b-block-properties-list').slideDown('fast')
    } else {
        $(this).removeClass('select__val')
        $('.b-block-properties-list').slideUp('fast')
    }
})

$('.b-block-properties-list li').on('click', function(e) {
    $('.select__val').text($(this).html())
    $('.select__val').removeClass('select__val')
    $('.b-block-properties-list').slideUp('fast')
})

// Кредит
$('.b-product__credit-period-val').on('click', function() {

    if (!$(this).hasClass('credit_select__val')) {
        $(this).addClass('credit_select__val')
        $('.b-product__credit-period-select').slideDown('fast')
    } else {
        $(this).removeClass('credit_select__val')
        $('.b-product__credit-period-select').slideUp('fast')
    }
})

$('.b-product__credit-period-select li').on('click', function(e) {
    $('.credit_select__val').text($(this).html())
    $('.credit_select__val').removeClass('credit_select__val')
    $('.b-product__credit-period-select').slideUp('fast')
})

// Выбор цвета
var colorSlider = new Swiper('.b-block-colors__container', {
    slidesPerView: 'auto',
    spaceBetween: 10,

    breakpoints: {
        740: {
            spaceBetween: 15
        }
    }
})

// Видео
$('.b-block-video__play-icon').on('click', function() {
    $('.b-block-video').addClass('play')
    $('#product_video')[0].play()
    $('#product_video')[0].controls = true
})

// Видео (моб.)
$('.b-block-video__play').on('click', function() {
    $('#product_video').slideToggle()
    $('#product_video')[0].play()
    $('#product_video')[0].controls = true
})

////////////////////////////////////////
/////// КАТЕГОРИЯ
////////////////////////////////////////
$('.b-block-hide-show__button').on('click', function() {
    $('.b-filter__group').each(function(e) {
        if (e > 2) {
            $(this).slideToggle()
        }
    })
})

////////////////////////////////////////
/////// ГЛАВНАЯ СТРАНИЦА
////////////////////////////////////////

// Слайдер
let heroSlider = new Swiper('.hero .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
      },

    navigation: {
        nextEl: '.slider-button--next',
        prevEl: '.slider-button--prev',
    }
})