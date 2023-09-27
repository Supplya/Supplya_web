import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { ShopComponent } from './Pages/shop/shop.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { ProductDetailsComponent } from './Pages/Operations/product-details/product-details.component';

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
  path: 'product-details', component: ProductDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
