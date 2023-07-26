import Swiper, { Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.slider')) {
        // alert('Hola');
        const opciones = {
            sliderPerView: 1,
            spaceBetween: 10,
            freeNode: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            breakpoints: {
                768: {
                    sliderPerView: 1
                },
                1024: {
                    sliderPerView: 1
                },
                1200: {
                    sliderPerView: 1
                }
            }
        };
        Swiper.use([Navigation]);
        new Swiper('.slider', opciones);
    }
});