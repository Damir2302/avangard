////////////////////////////////////////
/////// КАРТОЧКА ТОВАРА
////////////////////////////////////////

// Слайдер
var swiper = new Swiper('.b-product__slider-container', {
    direction: 'vertical',
    slidesPerView: 'auto',
    spaceBetween: 20
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