import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { map, tap } from 'rxjs/operators';
import { UiService } from '../../../ui/services/ui.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public product: Product = new Product();

  constructor(
    private route: ActivatedRoute,
    private ui: UiService,
  ) { }

  ngOnInit() {
    this.route.data
      .pipe(
        map(data => data['product']),
        tap(product => this.metaData(product)),
      )
      .subscribe(res => this.product = res);
  }

  metaData(product: Product) {
    this.ui.setMetaData({
      title: `${product.name} for only $${product.price}`,
      description: product.description,
      image: product.image,
    });
  }
}
