import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { ProductsComponent } from "../../components/products/products.component";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-content',
    standalone: true,
    templateUrl: './content.component.html',
    styleUrl: './content.component.sass',
    imports: [FooterComponent, ProductsComponent, HeaderComponent]
})
export class ContentComponent {

}
