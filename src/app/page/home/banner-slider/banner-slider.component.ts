import { AfterViewInit, Component, Input } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-banner-slider',
  templateUrl: './banner-slider.component.html',
  styleUrl: './banner-slider.component.scss'
})
export class BannerSliderComponent implements AfterViewInit {
  @Input() Banners: any[] = [];


  ngAfterViewInit() {
    // Register Swiper custom elements
    register();

    // Initialize Swiper
    const swiperEl = document.querySelector('.container') as SwiperContainer;

    const swiperParams: SwiperOptions = {
      loop: true,
      speed: 800, // Transition duration in ms (400-800 is smooth)
      effect: 'slide', // Use 'fade' for fade transitions
      // grabCursor: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: true,
      },
      injectStyles: [`
      .swiper-pagination-bullet {
        width: 11px;
        height: 11px;
        text-align: center;
        // line-height: 20px;
        // font-size: 12px;
        // color: #000;
        // cursor: pointer;
        opacity: 0.2;
        background: #fff;
        border: 1px solid #B3B3B3;
      }

      .swiper-pagination-bullet-active {
        // color: #fff;
        background: #B60201;
        border-color: #B60201;
        opacity: 1;
      }
      `],
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className}"></span>`;
        },
      },
      navigation: {
        nextEl: '.first',
        prevEl: '.last',
      },
      on: {
        init() {
          // Additional initialization if needed
        },
      },
    };

    // Assign parameters to the Swiper element
    Object.assign(swiperEl, swiperParams);

    // Initialize Swiper
    swiperEl.initialize();
  }

}
