import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { ShopComponent } from './Pages/shop/shop.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { ProductDetailsComponent } from './Pages/Operations/product-details/product-details.component';
import { ShoppingCartComponent } from './Pages/Operations/shopping-cart/shopping-cart.component';
import { ShippingInfoComponent } from './Pages/Operations/shipping-info/shipping-info.component';
import { OrderCompletedComponent } from './Pages/Operations/order-completed/order-completed.component';

const routes: Routes = [{
  path: '', component: HomeComponent
},
{
  path: 'sign-in', component: SignInComponent
},
{
  path: 'sign-up', component: SignUpComponent
},
{
  path: 'about-us', component: AboutComponent
},
{
  path: 'contact-us', component: ContactComponent
},

{
  path: 'shop', component: ShopComponent
},
{
  path: 'product-details/:id', component: ProductDetailsComponent
},
{
  path: 'shopping-cart', component: ShoppingCartComponent
},
{
  path: 'shipping-info', component: ShippingInfoComponent
},
{
  path: 'order-completed', component: OrderCompletedComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
