import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
table :any =[] ;
public qrCodeText : string;
  constructor(private productService: ProductService) {
    this.qrCodeText= 'Your QR code data string';
   }

  ngOnInit(): void {
   this.getProduct();}
getProduct(){
  this.table = this.productService.productTable;
  console.log("my product",this.table);
}
}
