import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public product: Product = new Product();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.product.id = this.route.snapshot.paramMap.get('id');
  }

}
