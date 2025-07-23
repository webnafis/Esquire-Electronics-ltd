import { AfterViewInit, Component, Input } from '@angular/core';
import { FEST_PRODUCTS_DB } from '../../../DB/fest.db';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrl: './support.component.scss'
})
export class SupportComponent implements AfterViewInit {
  public Support_products: any = FEST_PRODUCTS_DB;

  ngAfterViewInit() {


    // Register Swiper custom elements
    // register();

    // Initialize Swiper
    const swiperElSupport = document.querySelector(`#support`) as SwiperContainer;
    if (!swiperElSupport) return;
    const swiperParamsSupport: SwiperOptions = {
      loop: false,
      slidesPerView: 6,
      spaceBetween: 10,
      speed: 600, // Transition duration in ms (400-800 is smooth)
      effect: 'slide', // Use 'fade' for fade transitions
      // grabCursor: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      navigation: {
        nextEl: `.first-support`,
        prevEl: `.last-support`,
      },
      breakpoints: {
        // 320: { slidesPerView: 1, spaceBetween: 10 },
        // 640: { slidesPerView: 2, spaceBetween: 15 },
        // 770: { slidesPerView: 3, spaceBetween: 20 },
        // 990: { slidesPerView: 4, spaceBetween: 25 },
        // 1200: { slidesPerView: 4, spaceBetween: 20 }
      },
      on: {
        init() {
          // Additional initialization if needed
        },
      },
    };

    // Assign parameters to the Swiper element
    Object.assign(swiperElSupport, swiperParamsSupport);

    // Initialize Swiper
    swiperElSupport.initialize();
  }
}
