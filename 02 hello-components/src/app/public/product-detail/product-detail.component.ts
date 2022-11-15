import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input()
  product?: Product;
  
  constructor(private productService: ProductService, private route: ActivatedRoute) { 
    console.log('ProductDetail ctor');
  }

  ngOnInit(): void {
    this.getProduct();
  }

  private getProduct() {
    // LET OP: subscribe -->
    // let id = Number(this.route.snapshot.paramMap.get('id'));
    // console.log(`Getting product ${id}`);
    // this.product = this.productService.getProductById(id);
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      console.log(`Getting product ${id}`);

      this.product = this.productService.getProductById(id);
    })

  }

}
