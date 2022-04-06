
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Product } from '../bestand/bestand.component';

const baseUrl = 'http://localhost:8080/api/products'

@Injectable({
  providedIn: 'root'
})
export class ProductCRUDServiceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(baseUrl);
  }
}
