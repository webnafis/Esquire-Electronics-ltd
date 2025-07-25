import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { YoutubePopupComponent } from '../../../shared/youtube-popup/youtube-popup.component';

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
      videoId: "aKUbA-QXgm0?si=5Qmuhx2v8N_IAfVd"
    },
    {
      name: "name",
      imgLink: "https://api.ecommerce.esquireelectronicsltd.com/api/upload/images/rh-d4e3.webp?resolution=220_270",
      videoId: "aKUbA-QXgm0?si=5Qmuhx2v8N_IAfVd"
    }, {
      name: "name",
      imgLink: "https://api.ecommerce.esquireelectronicsltd.com/api/upload/images/rh-d4e3.webp?resolution=220_270",
      videoId: "aKUbA-QXgm0?si=5Qmuhx2v8N_IAfVd"
    }, {
      name: "name",
      imgLink: "https://api.ecommerce.esquireelectronicsltd.com/api/upload/images/rh-d4e3.webp?resolution=220_270",
      videoId: "aKUbA-QXgm0?si=5Qmuhx2v8N_IAfVd"
    }, {
      name: "name",
      imgLink: "https://api.ecommerce.esquireelectronicsltd.com/api/upload/images/rh-d4e3.webp?resolution=220_270",
      videoId: "aKUbA-QXgm0?si=5Qmuhx2v8N_IAfVd"
    }, {
      name: "name",
      imgLink: "https://api.ecommerce.esquireelectronicsltd.com/api/upload/images/rh-d4e3.webp?resolution=220_270",
      videoId: "aKUbA-QXgm0?si=5Qmuhx2v8N_IAfVd"
    }, {
      name: "name",
      imgLink: "https://api.ecommerce.esquireelectronicsltd.com/api/upload/images/rh-d4e3.webp?resolution=220_270",
      videoId: "aKUbA-QXgm0?si=5Qmuhx2v8N_IAfVd"
    }, {
      name: "name",
      imgLink: "https://api.ecommerce.esquireelectronicsltd.com/api/upload/images/rh-d4e3.webp?resolution=220_270",
      videoId: "aKUbA-QXgm0?si=5Qmuhx2v8N_IAfVd"
    }, {
      name: "name",
      imgLink: "https://api.ecommerce.esquireelectronicsltd.com/api/upload/images/rh-d4e3.webp?resolution=220_270",
      videoId: "aKUbA-QXgm0?si=5Qmuhx2v8N_IAfVd"
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
      slidesPerView: 2.5,
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
      breakpoints: {
        // 320: { slidesPerView: 2.5, spaceBetween: 20 },
        // 640: { slidesPerView: 2.5, spaceBetween: 20 },
        770: { slidesPerView: 3, spaceBetween: 20 },
        990: { slidesPerView: 4, spaceBetween: 20 },
        1200: { slidesPerView: 5, spaceBetween: 20 }
      },
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
  @ViewChild(YoutubePopupComponent) youtubePopup!: YoutubePopupComponent;

  public openVideo(videoId: string) {
    this.youtubePopup.open(videoId);
  }
}
