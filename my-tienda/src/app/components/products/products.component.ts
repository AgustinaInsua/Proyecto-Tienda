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
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { DividerModule } from 'primeng/divider';
import { SliderModule } from 'primeng/slider';
import { PanelModule } from 'primeng/panel';
import { InputNumberModule } from 'primeng/inputnumber';

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
    ButtonModule,
    CardModule,
    CarouselModule,
    DividerModule,
    SliderModule,
    PanelModule,
    InputNumberModule
  ],
  providers: [ProductService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.sass'
})
export class ProductsComponent implements OnInit{
  layout: 'list' | 'grid' = 'list';

  products!: Product[];
  responsiveOptions: any[] | undefined;
  rangeValues: number[] = [];
  value1:any;
  value2:any;

  constructor(private productService: ProductService) {}

  ngOnInit() {
      this.value1 = 0;
      this.value2 = 0;
      this.rangeValues = [this.value1,this.value2]; 
      this.productService.getProducts().then((data) => (this.products = data.slice(0, 12))); 
      
      this.responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];
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