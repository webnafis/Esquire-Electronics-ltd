import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-slider',
  templateUrl: './banner-slider.component.html',
  styleUrl: './banner-slider.component.scss'
})
export class BannerSliderComponent {
  @Input() Banners: any[] = [];

}
