import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // <-- Add this
import { AppComponent } from './app.component';
import { register as registerSwiperElement } from 'swiper/element/bundle';
// import { SafeUrlPipe } from './pipes/safeurl.pipe';
// import { SafeUrlPipe } from './pipes/safeurl.pipe';

registerSwiperElement();
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule // <-- Add this line
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
  // exports: [SafeUrlPipe]
})
export class AppModule {

  // dont use server side rendering cause u dont need it now

}