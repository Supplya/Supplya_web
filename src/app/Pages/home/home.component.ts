import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.getAllProducts();
  }


  getAllProducts() {
    this.productService.getAllProducts().subscribe((data: any) => {
      console.log(data, 'products');
    },
    )
  }
}
