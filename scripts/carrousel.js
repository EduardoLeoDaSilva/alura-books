const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',

     freeMode:true,
    spaceBetween: 10,
     width: '600',
    slidesPerView: 1,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    clickable: true,
        type: 'bullets'
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});