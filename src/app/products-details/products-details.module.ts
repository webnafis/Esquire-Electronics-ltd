import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsDetailsRoutingModule } from './products-details-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { register as registerSwiperElement } from 'swiper/element/bundle';

registerSwiperElement();
@NgModule({
  declarations: [
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsDetailsRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductsDetailsModule { }
