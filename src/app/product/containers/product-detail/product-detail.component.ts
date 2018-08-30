import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public product: Product = new Product();

  constructor(private route: ActivatedRoute,
              private service: ProductService
  ) { }

  ngOnInit() {
    this.service.getProduct(this.route.snapshot.paramMap.get('id'))
      .subscribe(res => this.product = res);
  }

}
