$(document).ready(function () {
    $('.js-burger-btn').on('click', function () {
        if ($('.js-header').hasClass('active')) {
            $('.js-header').removeClass('active');
        } else {
            $('.js-header').addClass('active');
        }
    })
})
$(document).ready(function () {
    $('.js-btn-close').on('click', function () {
        if ($('.js-intro').hasClass('active')) {
            $('.js-intro').removeClass('active');
        } else {
            $('.js-intro').addClass('active');
        }
    })
})