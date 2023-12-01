import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:6001/v1/api';

  constructor(private http: HttpClient) {}

  getAllProducts() {
    const productsUrl = `${this.baseUrl}/products/all`;
    return this.http.get<Array<any>>(productsUrl);
  }

  getProductDetails(productId: string) {
    const productUrl = `${this.baseUrl}/products/${productId}`;
    return this.http.get(productUrl);
  }

  createProduct(product: any) {
    const productUrl = `${this.baseUrl}/products`;
    return this.http.post<any>(productUrl, product);
  }

  deleteProduct(productId: string) {}
}
