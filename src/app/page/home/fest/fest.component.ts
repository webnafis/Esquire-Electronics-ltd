import { Component, OnDestroy, OnInit } from '@angular/core';
import { FEST_PRODUCTS_DB } from '../../../DB/fest.db';

@Component({
  selector: 'app-fest',
  templateUrl: './fest.component.html',
  styleUrl: './fest.component.scss'
})
export class FestComponent implements OnInit, OnDestroy {
  public Fest_products: any = FEST_PRODUCTS_DB;
  public days: number = 0;
  public hours: number = 0;
  public minutes: number = 0;
  public seconds: number = 0;
  private timer: any;
  private targetDate = new Date('2025-08-01T00:00:00').getTime();


  ngOnInit(): void {
    this.updateCountdown();
    this.timer = setInterval(() => this.updateCountdown(), 1000);
  }
  /**
   * updateCountdown()
   */


  private updateCountdown(): void {
    const now = new Date().getTime();
    const distance = this.targetDate - now;

    if (distance < 0) {
      clearInterval(this.timer);
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      return;
    }

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
