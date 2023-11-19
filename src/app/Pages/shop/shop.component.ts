import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: any;
  onSubmit: boolean = false;
    constructor(private productService: ProductService, private cartService: CartService, private route: Router) { }
    ngOnInit(): void {
      this.getAllProducts();
    }
  
  
    getAllProducts() {
      this.productService.getAllProducts().subscribe((data: any) => {
        this.products = data.products;
        console.log(data, 'products');
      },
      )
    }

    getStarsArray(rating: number): string[] {
        if (rating <= 0) {
          return Array(5).fill('&#9734;'); // Return an array with 5 empty stars
        }
    
        const filledStars = Array(rating).fill('&#9733;');
        const emptyStars = Array(5 - rating).fill('&#9734;');
        return filledStars.concat(emptyStars);
      }

    addToCart(product: any) {
        this.onSubmit = true;
        this.cartService.addToCart(product);
        alert('Added product');
        console.log(product, 'product')
      }
   scrollLeft() {
    const wrapper = document.querySelector('.wrapper-item');
    const scrollAmount = 200; // Adjust as needed

    if (wrapper) {
        wrapper.scrollBy({
            top: 0,
            left: -scrollAmount,
            behavior: 'smooth'
        });
    }
}

 scrollRight() {
    const wrapper = document.querySelector('.wrapper-item');
    const scrollAmount = 200; // Adjust as needed

    if (wrapper) {
        wrapper.scrollBy({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

viewProduct(route: number) {
    this.route.navigate(['product-details/', `${route}`]);
    window.scrollTo(0, 0);
  }

  
}
