import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AutoCompleteModule } from 'primeng/autocomplete';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AutoCompleteModule,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  selectedItems:any;
}
