import { Component } from '@angular/core';

@Component({
  selector: 'app-search-tab',
  templateUrl: './search-tab.component.html',
  styleUrls: ['./search-tab.component.css']
})
export class SearchTabComponent {
  buttons: string[] = ['Mobile', 'Headphones', 'Bag', 'Bottle', 'Laptop Accesories', 'Miscellaneous'];

  handleClick() {

  }

}
