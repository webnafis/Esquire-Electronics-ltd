import { Component, Input } from '@angular/core';
import { FEST_PRODUCTS_DB } from '../../../DB/fest.db';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrl: './support.component.scss'
})
export class SupportComponent {
  public Support_products: any = FEST_PRODUCTS_DB;
}
