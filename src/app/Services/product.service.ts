import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Product } from '../Models/product';
import { HttpClient } from '@angular/common/http';
import { Server } from 'src/assets/apConfig';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private server: Server) { }
  // productUrl: string = "https://supplya.cyclic.app/";
  productUrl = this.server.baseUrl;

  private productsSubject = new BehaviorSubject<Product[]>([]);
  products$: Observable<Product[]> = this.productsSubject.asObservable();

  products!: Product;

  addNewProduct(product: any): Observable<any> {
    return this.http.post<any>(`${this.productUrl}`, product);
  }
  getProductId(id: any): Observable<any> {
    return this.http.get<any>(`${this.productUrl}` + id);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.productUrl}products`);
  }

  UpdateProduct(id: any, product: any): Observable<any> {
    return this.http.put<any>(`${this.productUrl}/${id}`, product)
  }


  // getAllFoodsBySearch(searchTerm: string): Observable<Product[]> {
  // return this.getAllProducts().pipe(
  //   map(products => products.filter(x => x.category.toLowerCase().includes(searchTerm.toLowerCase())))
  // );
  // }

}
