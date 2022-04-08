import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-list-new',
  templateUrl: './product-list-new.component.html',
  styleUrls: ['./product-list-new.component.css']
})
export class ProductListNewComponent implements OnInit {

  products: Product[] | undefined;

  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.productService.findAll().subscribe(data => {
      this.products = data;
    })
  }

}
