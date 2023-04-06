import "../../node_modules/focus-visible/dist/focus-visible";
import "../scss/style.scss";
import "../index.html";



new Swiper('.swiper-container-1', {

    pagination: {
       el: '.swiper-pagination-1',
       clickable: true,
    },
    slidesPerView: 1.2,

 });

 new Swiper('.swiper-container-2', {

    pagination: {
       el: '.swiper-pagination-2',
       clickable: true,
    },
    slidesPerView: 1.2,

 });

 new Swiper('.swiper-container-3', {

    pagination: {
       el: '.swiper-pagination-3',
       clickable: true,
    },
    slidesPerView: 1.2,

 });
