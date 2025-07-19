import { Component } from '@angular/core';
import { FEST_PRODUCTS_DB } from '../../../DB/fest.db';

@Component({
  selector: 'app-fest',
  templateUrl: './fest.component.html',
  styleUrl: './fest.component.scss'
})
export class FestComponent {
  public Fest_products: any = FEST_PRODUCTS_DB;
}
