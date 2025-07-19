import { Component } from '@angular/core';
import { FEATURE_DB } from '../../DB/feature.db';
import { CATEGORY_SECTION_DB } from '../../DB/category_section.database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public features: any[] = FEATURE_DB;
  public catrgory_section_db: any[] = CATEGORY_SECTION_DB;
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
  public bannerYoutube: string = "https://api.ecommerce.esquireelectronicsltd.com/api/upload/images/whatsapp-image-2025-01-11-at-2-9aed.webp?resolution=1391_180";
  public bannerSupport: string = "https://api.ecommerce.esquireelectronicsltd.com/api/upload/images/usp-banner-8e98.webp?resolution=1489_232";
  public bannerBlog: string = "https://api.ecommerce.esquireelectronicsltd.com/api/upload/images/blog-dextop-49aa.webp?resolution=1397_180";
}
