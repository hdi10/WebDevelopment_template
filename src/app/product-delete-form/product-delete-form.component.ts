import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../models/product';
@Component({
  selector: 'app-product-delete-form',
  templateUrl: './product-delete-form.component.html',
  styleUrls: ['./product-delete-form.component.css']
})
export class ProductDeleteFormComponent {
  product: Product;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductServiceService) {
    this.product = new Product();
  }



  onSubmit(productid: number) {
    console.log(this.product.id + " hetr");


    this.productService.deleteItem(productid).subscribe((data => { console.log("success") }));

  }



}

