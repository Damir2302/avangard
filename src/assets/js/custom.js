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
    slidesPerView: 1,

    breakpoints: {
        1280: {
            slidesPerView: 'auto',
            spaceBetween: 20,
            centeredSlides: true,
            loop: true,
        }
    },

    pagination: {
        el: '.swiper-pagination',
      },

    navigation: {
        nextEl: '.hero .slider-button--next',
        prevEl: '.hero .slider-button--prev',
    }
})

let catTabs = new Swiper('.cat__tabs .swiper', {
    slidesPerView: 'auto',
    freeMode: true
})

let catSlider = new Swiper('.cat__container .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 21,
    freeMode: true,

    navigation: {
        nextEl: '.cat__container .slider-button--next',
        prevEl: '.cat__container .slider-button--prev',
    }
})

let workSlider = new Swiper('.work__inner .swiper', {
    slidesPerView: 1,
    spaceBetween: 10,

    breakpoints: {
        744: {
            slidesPerView: 'auto',
        }
    }
})

let headerNav = new Swiper('.header__nav .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    freeMode: true
})

// Меню мобильное
$('.mobile-burger i').on('click', function() {
    $('.mobile-burger i').toggleClass('hidden');
    $('.header__nav-mobile').toggleClass('show');
})

// Поиск мобильный
$('.header__search .form-submit').on('click', function(e) {
    if ($(window).width() < 744) {
        e.preventDefault()
        $(this).parent().find('input').addClass('show')
    } else {
        return;
    }
})

$('html').click(function(e) {
    if (!$(e.target).closest('.header__search').length) {
        $('.header__search input').removeClass('show');
      }
})

// Меню в подвале
$('.arrow-down').on('click', function() {
    $(this).next().slideToggle()
})


// ГДЕ КУПИТЬ
let locationUrl = new Swiper('.b-filter__group-items.swiper', {
    slidesPerView: 'auto',
    freeMode: true,

    navigation: {
        nextEl: '.b-slider-arrow-next',
        prevEl: '.b-slider-arrow-prev',
    }
})