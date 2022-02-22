$(function () {
    $('.banners-slider__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        fade: true,
        infinite: false,
        // autoplay: true,
        // autoplaySpeed: 4000
    });

    $('.product-card').hover( function () {
        $(this).toggleClass('product-card--active');
        $(this).find('.product-card__link').toggleClass('product-card__link--active');  
    });

    let Mixer = mixitup('.top-products__list');
});