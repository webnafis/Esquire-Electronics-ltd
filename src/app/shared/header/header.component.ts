import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  public isOpenBrands = false;
  public isOpenService = false;
  public isScrolled = false;
  private scrollThreshold = 20;
  public placeholderText = 'Search products.....';
  public displayedText = '';
  private currentIndex = 0;
  public isDeleting = false;
  private typingSpeed = 100; // ms per character
  private timeoutId: any;
  public isFocused = false;
  ngOnInit() {
    this.startTyping();
  }

  ngOnDestroy() {
    this.clearTimer();
  }
  /**
   * onFocus()
   * onBlur()
   * resetAnimation()
   * clearTimer()
   * startTyping()
   * toggleDropdown1()
   * toggleDropdown2()
   * OnClickOutside()
   * OnWindowScroll()
  */


  public onFocus() {
    this.isFocused = true;
    this.resetAnimation();
  }

  public onBlur() {
    this.isFocused = false;
    // Only restart if input is empty
    if (!this.displayedText) {
      this.resetAnimation();
    }
  }

  private resetAnimation() {
    this.clearTimer();
    this.displayedText = '';
    this.currentIndex = 0;
    this.isDeleting = false;
    this.startTyping();
  }

  private clearTimer() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

  private startTyping() {
    if (this.isFocused) return; // Don't animate while focused

    const currentText = this.isDeleting
      ? this.placeholderText.substring(0, this.currentIndex - 1)
      : this.placeholderText.substring(0, this.currentIndex + 1);

    this.displayedText = currentText;
    this.currentIndex = this.isDeleting ? this.currentIndex - 1 : this.currentIndex + 1;

    if (!this.isDeleting && currentText === this.placeholderText) {
      this.timeoutId = setTimeout(() => {
        this.isDeleting = true;
        this.startTyping();
      }, 1000);
    } else if (this.isDeleting && currentText === '') {
      this.isDeleting = false;
      this.timeoutId = setTimeout(() => this.startTyping(), this.typingSpeed);
    } else {
      this.timeoutId = setTimeout(() => this.startTyping(), this.typingSpeed);
    }
  }


  public toggleDropdown1() {

    if (this.isOpenBrands === true) {
      this.isOpenBrands = !this.isOpenBrands;
      return;
    }
    this.isOpenService = !this.isOpenService;
    // this.isOpenBrands = !this.isOpenBrands;
  }
  public toggleDropdown2() {
    if (this.isOpenService === true) {

      this.isOpenService = !this.isOpenService;
      return;
    }
    this.isOpenBrands = !this.isOpenBrands;
  }

  @HostListener('document:click', ['$event'])
  public onClickOutside(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;

    if (
      !targetElement.closest('.dropdown-con') && ((this.isOpenBrands === true) || (this.isOpenService === true))// Check if clicked outside dropdown
    ) {
      if (this.isOpenService === true) {

        this.isOpenService = !this.isOpenService;
      }
      if (this.isOpenBrands === true) {
        this.isOpenBrands = !this.isOpenBrands;
      }
    }
  }

  @HostListener('window:scroll', [])
  public onWindowScroll() {
    const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollPos > this.scrollThreshold) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

}
