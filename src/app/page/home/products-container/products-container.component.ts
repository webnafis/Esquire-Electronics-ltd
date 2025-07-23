import { AfterViewInit, Component, Input } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrl: './products-container.component.scss'
})
export class ProductsContainerComponent implements AfterViewInit {
  @Input() products: any[] = [];
  @Input() swiperId: string = '';


  ngAfterViewInit() {
    if (!this.swiperId) {
      console.error('Swiper ID is required for multiple instances');
      return;
    }

    // Register Swiper custom elements
    // register();

    // Initialize Swiper
    const swiperElproducts = document.querySelector(`#${this.swiperId}`) as SwiperContainer;
    if (!swiperElproducts) return;
    const swiperParamsProducts: SwiperOptions = {
      loop: false,
      slidesPerView: 4,
      spaceBetween: 5,
      speed: 300, // Transition duration in ms (400-800 is smooth)
      effect: 'slide', // Use 'fade' for fade transitions
      // grabCursor: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      navigation: {
        nextEl: `.first-${this.swiperId}`,
        prevEl: `.last-${this.swiperId}`,
      },
      breakpoints: {
        // 320: { slidesPerView: 1, spaceBetween: 10 },
        // 640: { slidesPerView: 2, spaceBetween: 15 },
        770: { slidesPerView: 3, spaceBetween: 5 },
        990: { slidesPerView: 4, spaceBetween: 5 },
        // 1200: { slidesPerView: 4, spaceBetween: 5 }
      },
      on: {
        init() {
          // Additional initialization if needed
        },
      },
    };

    // Assign parameters to the Swiper element
    Object.assign(swiperElproducts, swiperParamsProducts);

    // Initialize Swiper
    swiperElproducts.initialize();
  }

}
