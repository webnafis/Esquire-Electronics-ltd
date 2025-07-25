import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SafeUrlPipe } from '../../pipes/safeurl.pipe';


@Component({
  selector: 'app-youtube-popup',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './youtube-popup.component.html',
  styleUrl: './youtube-popup.component.scss'
})
export class YoutubePopupComponent {
  @Input() videoId: string = '';
  isVisible: boolean = false;

  open(videoId: string) {
    this.videoId = videoId;
    this.isVisible = true;
    document.body.style.overflow = 'hidden'; // Prevent scrolling behind popup
  }

  close() {
    this.isVisible = false;
    document.body.style.overflow = '';
  }
}
