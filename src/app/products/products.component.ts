import { Component } from '@angular/core';
import { product_Data } from '../data';
import products_data from 'products-list.json'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
 products: Array <product_Data> =products_data

}
