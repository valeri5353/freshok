$(function () {
    $('.slider__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        fade: true,
        infinite: false,
        // autoplay: true,
        // autoplaySpeed: 4000
    });

    $('.product').hover( function () {
        $(this).toggleClass('product--active');
        $(this).find('.product__img').toggleClass('product__img--active');  
    });

    let Mixer = mixitup('.top-products__inner');
});