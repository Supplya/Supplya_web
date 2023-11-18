import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../Models/product';
import { Cart } from '../Models/Cart';
import { CartItem } from '../Models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  // constructor(private toast: NgToastService) { }

  addToCart(product: Product): void {
    let cartItem = this.cart.items.find((item: any) => item.product.id === product.id);
    if (cartItem) return;
    // this.toast.error({
    //   detail: 'Unable to Add to Cart',
    //   summary: 'An Error Occurred',
    //   duration: 4000,
    // });
    this.cart.items.push(new CartItem(product));
    this.setCartToLocalStorage();
    // this.toast.success({detail: "Cart Update!", summary: "Product Added Successfully", duration: 4000})
  }
  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }


  getCart(): Cart {
    return this.cartSubject.value;
  }


  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce(
      (prevSum, currentItem) =>
        parseFloat(prevSum.toString()) + parseFloat(currentItem.price.toString()),
      0
    );
    this.cart.totalCount = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.quantity,
      0
    );
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }
  removeFromCart(productId: number): void {
    this.cart.items = this.cart.items.filter((item) => item.product.id != productId);
    this.setCartToLocalStorage();
  }


  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  changeQuantity1(foodId: number, quantity: number) {
    let cartItem = this.cart.items.find((item) => item.product.id === foodId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.product.price;
    this.setCartToLocalStorage();
  }

  changeQuantity(foodId: number, quantity: number) {
    let cartItem = this.cart.items.find((item) => item.product.id === foodId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.product.price;
    this.setCartToLocalStorage();

  }


  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}
