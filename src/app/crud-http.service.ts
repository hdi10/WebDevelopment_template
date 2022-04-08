import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './models/product';


@Injectable({
  providedIn: 'root'
})
export class CrudHttpService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getCustomers() {
    console.log("test call");
    return this.httpClient.get<Product[]>('http://localhost:8080/products');
  }

  public deleteProduct(product: Product) {
    console.log(product.id);
    return this.httpClient.delete<Product>("http://localhost:8080" + "/" + product.id);
  }

  public createProduct(product: Product) {
    return this.httpClient.post<Product>("http://localhost:8080/addCustomers", product);
  }
}
