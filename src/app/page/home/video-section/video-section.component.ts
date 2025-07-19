import { Component } from '@angular/core';

@Component({
  selector: 'app-video-section',
  templateUrl: './video-section.component.html',
  styleUrl: './video-section.component.scss'
})
export class VideoSectionComponent {
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

  ];
}
