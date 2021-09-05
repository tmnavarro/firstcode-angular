import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { DialogConfirmation } from './diaglog-confirmation.component';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss'],
})
export class ProductReadComponent implements OnInit {
  products: Product[];
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(
    private productService: ProductService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products;
    });
  }

  deleteProduct(id: string): void {
    this.productService.delete(id).subscribe(() => {
      this.products = this.products.filter((product) => {
        return String(product?.id) != id;
      });
      this.productService.showMessage('Produto alterado com sucesso!');
    });
  }

  openDialog(id: string): void {
    const dialogRef = this.dialog.open(DialogConfirmation, {
      width: '350px',
      data: { id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteProduct(result);
      }
    });
  }
}
