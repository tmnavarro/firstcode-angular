import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: '',
    price: 0.0,
  };

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.productService.create(this.product).subscribe((data) => {
      console.log(data);
      this.productService.showMessage('Produtos criado com sucesso!');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
