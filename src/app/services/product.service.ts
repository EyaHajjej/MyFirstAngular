import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
productTable =[
  {productName:"Orange" , productPrice:30 , productQuantity:5},
  {productName:"PineApple" , productPrice:20 , productQuantity:4},
  {productName:"Fig" , productPrice:10 , productQuantity:7},
  {productName:"Banana" , productPrice:40 , productQuantity:10}
]
  constructor() { }
}
