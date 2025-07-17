import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  @Input() BannerLink: string = "";
  @Input() BannerName: string = "";
  @Input() margin: string = '0';
}
