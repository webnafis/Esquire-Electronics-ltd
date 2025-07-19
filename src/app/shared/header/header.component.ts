import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public isOpenBrands = false;
  public isOpenService = false;
  public isScrolled = false;
  private scrollThreshold = 20;


  /**
   * toggleDropdown1()
   * toggleDropdown2()
   * OnClickOutside()
   * OnWindowScroll()
  */




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
