import { AfterViewInit, Component } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-blogs-container',
  templateUrl: './blogs-container.component.html',
  styleUrl: './blogs-container.component.scss'
})
export class BlogsContainerComponent implements AfterViewInit {


  ngAfterViewInit() {


    // Register Swiper custom elements
    // register();

    // Initialize Swiper
    const swiperElBlog = document.querySelector(`#blogs`) as SwiperContainer;
    if (!swiperElBlog) return;
    const swiperParamsBlog: SwiperOptions = {
      loop: false,
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 400, // Transition duration in ms (400-800 is smooth)
      effect: 'slide', // Use 'fade' for fade transitions
      // grabCursor: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      navigation: {
        nextEl: `.first-blog`,
        prevEl: `.last-blog`,
      },
      breakpoints: {
        // 320: { slidesPerView: 1, spaceBetween: 10 },
        // 640: { slidesPerView: 2, spaceBetween: 30 },
        770: { slidesPerView: 2, spaceBetween: 30 },
        990: { slidesPerView: 3, spaceBetween: 30 },
        // 1200: { slidesPerView: 5, spaceBetween: 20 }
      },
      on: {
        init() {
          // Additional initialization if needed
        },
      },
    };

    // Assign parameters to the Swiper element
    Object.assign(swiperElBlog, swiperParamsBlog);

    // Initialize Swiper
    swiperElBlog.initialize();
  }
}
