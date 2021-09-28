import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import {CarouselModule} from 'primeng/carousel';
import { MenuComponent } from './menu/menu.component';
import {MegaMenuModule} from 'primeng/megamenu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import {ButtonModule} from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CarouselComponent,
    MenuComponent,
    TopmenuComponent,
    ProductCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    MegaMenuModule,
    ButtonModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
