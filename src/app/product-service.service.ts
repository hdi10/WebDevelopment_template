import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from './models/product';
import { catchError, Observable, retry, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private productUrl: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {
    this.productUrl = 'http://localhost:8080/products';
  }


  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }




  // public getById() {
  //   let id: number = 1;
  //   let endPoints = id;
  //   this.http.get(this.productUrl + endPoints).subscribe(data => {
  //     console.log(data);
  //   });
  // }

  public save(product: Product) {
    return this.http.post<Product>(this.productUrl, product);
  }



  public deletePost(id: number) {
    let endPoints = this.productUrl + "/" + id;
    this.http.delete<Product>(endPoints).subscribe(data => {
      console.log(data);
    });

  }

  public deleteProduct(productid: any): Observable<number> {
    let endPoints = this.productUrl + "/" + productid;
    let httpheaders = new HttpHeaders()
      .set('Content-type', 'application/Json');
    let options = {
      headers: httpheaders
    };

    console.log(productid)

    return this.http.delete<number>(endPoints);
  }

  getCustomers() {
    console.log("test call");
    return this.http.get<Product[]>('http://localhost:8080/products');
  }

  public deleteProduct1(product: Product) {
    console.log(product.id.value);
    return this.http.delete<Product>("http://localhost:8080" + "/products/" + product.id.value);
    console.log(product);
  }

  public createProduct(product: Product) {
    return this.http.post<Product>("http://localhost:8080/addProducts", product);
  }

  public deleteByName(product: Product) {
    console.log(product.id);
    return this.http.delete("http://localhost:8080" + "/" + product.name);
    console.log(product);
  }

  delete(id: number) {



    return this.http.delete<Product>(this.productUrl, this.httpOptions)

  }

  myDelete() {
    this.http.delete(this.productUrl + '/posts/1')
  }



  // Delete item by id
  deleteItem(id: number) {
    console.log("Inside Delete API_CALL");
    return this.http
      .delete<Product>(this.productUrl + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}
