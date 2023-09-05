import { Component, Input } from '@angular/core';
import { product_Data } from '../data';
import { Router } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-prod-card',
  templateUrl: './prod-card.component.html',
  styleUrls: ['./prod-card.component.css']
})
export class ProdCardComponent {
  @Input() product !: product_Data ;

  constructor(private router: Router){

  }

  redirectToDetails(id : number){ 
    this.router.navigate(['prod-detail' , id])
  }
  redirectToCart(id : number){ 
    this.router.navigate(['cart' , id])
  }
}

@Pipe({
  name: 'Stockpipe'
})

export class Stockpipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if(value>0){
      return 'in stock' 
    }else{
      return 'out of stock'
    }
  }
}
@Pipe({
  name: 'Stockcolor'
})
export class Stockcolor implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if(value>0){
      return 'green'
    }else{
      return 'red'
    }
  }
}