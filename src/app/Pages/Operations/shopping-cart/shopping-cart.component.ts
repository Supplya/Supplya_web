import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Models/Cart';
import { CartItem } from 'src/app/Models/CartItem';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  quantity: any = 1;
  cart!: Cart;
  cartItem!: CartItem;
  constructor( private cartService: CartService, private route: Router){

  }
  ngOnInit(): void {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
      console.log(this.cart, 'getCartObservable');
    });
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.product.id);
    alert('Product has been removed successfully')
    // this.toast.success({
    //   detail: 'Cart Update!',
    //   summary: 'Product has been removed successfully',
    //   duration: 3000,
    // });
  }

  // changeQuantity(delta: number, cartItem: any) {
    
  //   cartItem.quantity += delta;
  //   if (cartItem.quantity < 1) {
  //     cartItem.quantity = 1;
  //   }
  //   this.cartService.changeQuantity(cartItem.product.id, cartItem.quantity);
  // }

  changeQuantity(delta: number, cartItem: CartItem) {
  
    cartItem.quantity += delta;
    if (cartItem.quantity < 1) {
      cartItem.quantity = 1;
    }
    this.cartService.changeQuantity(cartItem.product.id, cartItem.quantity);
  }
  
  clearCart(){
    this.cartService.clearCart();
  }
  checkoutRoute(){
    this.route.navigate(['checkout']);
    window.scrollTo(0, 0);
      }
  shoRoute(){
    this.route.navigate(['our-menu']);
    window.scrollTo(0, 0);
      }
}
