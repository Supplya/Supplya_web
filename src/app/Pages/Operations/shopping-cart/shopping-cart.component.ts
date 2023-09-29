import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  quantity: number = 1;
  changeQuantity(delta: number, cartItem: any) {
    
    cartItem.quantity += delta;
    if (cartItem.quantity < 1) {
      cartItem.quantity = 1;
    }
    // this.cartService.changeQuantity(cartItem.food.id, cartItem.quantity);
  }
}
