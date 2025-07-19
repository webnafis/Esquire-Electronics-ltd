import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { BannerSliderComponent } from './banner-slider/banner-slider.component';
import { BlogsCardComponent } from './blogs-card/blogs-card.component';
import { BlogsContainerComponent } from './blogs-container/blogs-container.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategorySectionComponent } from './category-section/category-section.component';
import { FeaturesComponent } from './features/features.component';
import { FestComponent } from './fest/fest.component';
import { ProductsContainerComponent } from './products-container/products-container.component';
import { ProductCardComponent } from "../../shared/product-card/product-card.component";
import { SupportComponent } from './support/support.component';
import { VideoSectionComponent } from "./video-section/video-section.component";


@NgModule({
  declarations: [
    SupportComponent,
    HomeComponent,
    BannerComponent,
    BannerSliderComponent,
    BlogsCardComponent,
    BlogsContainerComponent,
    CategoriesComponent,
    CategorySectionComponent,
    FeaturesComponent,
    FestComponent,
    ProductsContainerComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProductCardComponent,
    VideoSectionComponent
  ]
})
export class HomeModule { }
