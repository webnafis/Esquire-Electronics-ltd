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
      speed: 300,
      effect: 'slide',
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
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
