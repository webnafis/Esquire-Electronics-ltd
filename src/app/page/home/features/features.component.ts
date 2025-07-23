import { AfterViewInit, Component, Input } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent implements AfterViewInit {
  @Input() features: any[] = [];

  ngAfterViewInit() {
    // register();
    const swiperElFeature = document.querySelector('.container-feature') as SwiperContainer;

    const swiperParamsFeature: SwiperOptions = {
      // loop: tr,
      slidesPerView: 6,
      spaceBetween: 0,
      speed: 300,
      effect: 'slide',
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      breakpoints: {
        // 320: { slidesPerView: 1, spaceBetween: 10 },
        // 640: { slidesPerView: 2, spaceBetween: 15 },
        770: { slidesPerView: 4, spaceBetween: 15 },
        990: { slidesPerView: 6, spaceBetween: 0 },
        // 1200: { slidesPerView: 6, spaceBetween: 0 }
      },
      on: {
        init() {
          // use it to make this swiper responsive i think
        },
      },
    };

    Object.assign(swiperElFeature, swiperParamsFeature);

    swiperElFeature.initialize();
  }

}
