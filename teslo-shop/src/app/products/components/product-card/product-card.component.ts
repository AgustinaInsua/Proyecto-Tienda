import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent { }
