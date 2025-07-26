import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { BackToTopComponent } from '../shared/back-to-top/back-to-top.component';
import { CartButtonComponent } from '../shared/cart-button/cart-button.component';
import { BottomNavberComponent } from '../shared/bottom-navber/bottom-navber.component';


@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    HeaderComponent,
    FooterComponent,
    BackToTopComponent,
    CartButtonComponent,
    BottomNavberComponent
  ]
})
export class PageModule { }
