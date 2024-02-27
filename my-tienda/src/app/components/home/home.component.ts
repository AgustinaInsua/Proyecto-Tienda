import { Component } from '@angular/core';
import { ProductsComponent } from "../products/products.component";
import { ContentComponent } from "../../shared/content/content.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.sass',
    imports: [ProductsComponent, ContentComponent]
})
export class HomeComponent {

}
