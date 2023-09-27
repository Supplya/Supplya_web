import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Views/navbar/navbar.component';
import { FooterComponent } from './Views/footer/footer.component';
import { NotFoundPageComponent } from './Views/not-found-page/not-found-page.component';
import { BreadcrumbComponent } from './Views/breadcrumb/breadcrumb.component';
import { NoInternetConnectionComponent } from './Views/no-internet-connection/no-internet-connection.component';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { AboutComponent } from './Pages/about/about.component';
import { ShopComponent } from './Pages/shop/shop.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { ProductDetailsComponent } from './Pages/Operations/product-details/product-details.component';
import { ShoppingCartComponent } from './Pages/Operations/shopping-cart/shopping-cart.component';
import { ShippingInfoComponent } from './Pages/Operations/shipping-info/shipping-info.component';
import { OrderCompletedComponent } from './Pages/Operations/order-completed/order-completed.component';
import { LoaderComponent } from './Views/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundPageComponent,
    BreadcrumbComponent,
    NoInternetConnectionComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ShopComponent,
    SignInComponent,
    SignUpComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    ShippingInfoComponent,
    OrderCompletedComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
