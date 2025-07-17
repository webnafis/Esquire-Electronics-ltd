import { Component } from '@angular/core';
import { FEATURE_DB } from '../../DB/feature.db';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public features: any[] = FEATURE_DB;
  public bannersForSlider = [
    {
      name: "banner 1",
      link: "https://api.ecommerce.esquireelectronicsltd.com/api/upload/images/wm-8472.webp?resolution=1200_418"
    },
    {
      name: "banner 1",
      link: "https://api.ecommerce.esquireelectronicsltd.com/api/upload/images/ref-1-ff3f.webp?resolution=1200_418"
    },
    {
      name: "banner 1",
      link: "https://api.ecommerce.esquireelectronicsltd.com/api/upload/images/ac-5fbe.webp?resolution=1200_418"
    },
  ];
  public bannerTop: string = "https://api.ecommerce.esquireelectronicsltd.com/api/upload/images/cetagory-banner-a2104.webp?resolution=1519_345";
}
