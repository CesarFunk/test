import { BrowserModule } from '@angular/platform-browser';
//librerias que se agregaron
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule, WavesModule,CarouselModule,InputsModule } from 'angular-bootstrap-md';
// Angular Forms Modules
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
//fin

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { PricePageComponent } from './price-page/price-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundPageComponent,
    PricePageComponent,
    BlogPageComponent,
    ContactPageComponent,
    AboutPageComponent
  
  ],
  imports: [
    //se agrego
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    CarouselModule,
    //fin
    BrowserModule,
    AppRoutingModule
  ],
  //se agrego
  schemas: [ NO_ERRORS_SCHEMA ],
  //fin
  providers: [WavesModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
