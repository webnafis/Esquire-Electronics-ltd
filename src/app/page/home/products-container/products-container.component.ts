import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrl: './products-container.component.scss'
})
export class ProductsContainerComponent {
  @Input() products: any[] = [];

}
