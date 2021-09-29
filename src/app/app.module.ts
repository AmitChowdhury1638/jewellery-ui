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
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NavComponent } from './nav/nav.component';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { FilterComponent } from './shopping-cart/filter/filter.component';
import { ProductListComponent } from './shopping-cart/product-list/product-list.component';
import { CartComponent } from './shopping-cart/cart/cart.component';
import {SliderModule} from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CarouselComponent,
    MenuComponent,
    TopmenuComponent,
    ProductCarouselComponent,
    ShoppingCartComponent,
    NavComponent,
    HeadComponent,
    FootComponent,
    FilterComponent,
    ProductListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    MegaMenuModule,
    ButtonModule,
    FontAwesomeModule,
    SliderModule,
    NgbModule,
    FormsModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
