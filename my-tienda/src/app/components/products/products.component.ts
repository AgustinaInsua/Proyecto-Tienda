import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Product } from '../../domain/product/product';
import { ProductService } from '../../services/products.service';
import { DataView, DataViewLayoutOptions, DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ 
    FormsModule,
    CommonModule,
    DataViewModule,
    RatingModule,
    TagModule,
    TabViewModule,
    ButtonModule
  ],
  providers: [ProductService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.sass'
})
export class ProductsComponent implements OnInit{
  layout: 'list' | 'grid' = 'list';

  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    
      this.productService.getProducts().then((data) => (this.products = data.slice(0, 12)));
  }

  getSeverity(product: Product): string {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';
  
      case 'LOWSTOCK':
        return 'warning';
  
      case 'OUTOFSTOCK':
        return 'danger';
  
      default:
        return ''; 
    }
  }
}