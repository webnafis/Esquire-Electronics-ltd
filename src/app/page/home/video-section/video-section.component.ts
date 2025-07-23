import { AfterViewInit, Component } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-video-section',
  templateUrl: './video-section.component.html',
  styleUrl: './video-section.component.scss'
})
export class VideoSectionComponent implements AfterViewInit {
  videos: any[] = [
    {
      name: "name",
      imgLink: "https://api.ecommerce.esquireelectronicsltd.com/api/upload/images/rh-d4e3.webp?resolution=220_270",
      videoLink: "https://www.youtube.com/watch?v=lE0Bgazot7o"
    },
    {
      name: "name",
      imgLink: "https://api.ecommerce.esquireelectronicsltd.com/api/upload/images/eo-2477.webp?resolution=220_270",
      videoLink: "https://www.youtube.com/watch?v=Lo1rP3L_6n0"
    },
    {
      name: "name",
      imgLink: "https://api.ecommerce.esquireelectronicsltd.com/api/upload/images/rh-d4e3.webp?resolution=220_270",
      videoLink: "https://www.youtube.com/watch?v=lE0Bgazot7o"
    },
    {
      name: "name",
      imgLink: "https://api.ecommerce.esquireelectronicsltd.com/api/upload/images/eo-2477.webp?resolution=220_270",
      videoLink: "https://www.youtube.com/watch?v=Lo1rP3L_6n0"
    },
    {
      name: "name",
      imgLink: "https://api.ecommerce.esquireelectronicsltd.com/api/upload/images/eo-2477.webp?resolution=220_270",
      videoLink: "https://www.youtube.com/watch?v=Lo1rP3L_6n0"
    },
    {
      name: "name",
      imgLink: "https://api.ecommerce.esquireelectronicsltd.com/api/upload/images/eo-2477.webp?resolution=220_270",
      videoLink: "https://www.youtube.com/watch?v=Lo1rP3L_6n0"
    },
    {
      name: "name",
      imgLink: "https://api.ecommerce.esquireelectronicsltd.com/api/upload/images/eo-2477.webp?resolution=220_270",
      videoLink: "https://www.youtube.com/watch?v=Lo1rP3L_6n0"
    },

  ];

  ngAfterViewInit() {


    // Register Swiper custom elements
    // register();

    // Initialize Swiper
    const swiperElVideo = document.querySelector(`#video`) as SwiperContainer;
    if (!swiperElVideo) return;
    const swiperParamsVideo: SwiperOptions = {
      loop: false,
      slidesPerView: 5,
      spaceBetween: 20,
      speed: 600, // Transition duration in ms (400-800 is smooth)
      effect: 'slide', // Use 'fade' for fade transitions
      // grabCursor: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      navigation: {
        nextEl: `.first-video`,
        prevEl: `.last-video`,
      },
      // breakpoints: {
      //   // 320: { slidesPerView: 1, spaceBetween: 10 },
      //   // 640: { slidesPerView: 2, spaceBetween: 15 },
      //   // 770: { slidesPerView: 3, spaceBetween: 20 },
      //   990: { slidesPerView: 4, spaceBetween: 25 },
      //   1200: { slidesPerView: 4, spaceBetween: 20 }
      // },
      on: {
        init() {
          // Additional initialization if needed
        },
      },
    };

    // Assign parameters to the Swiper element
    Object.assign(swiperElVideo, swiperParamsVideo);

    // Initialize Swiper
    swiperElVideo.initialize();
  }
}
