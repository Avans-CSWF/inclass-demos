import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(public productService: ProductService) { }

  onButtonDetailClick() {
    console.log("klik");
  }
  ngOnInit(): void {
  }

}
