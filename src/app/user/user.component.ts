import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
       name = "Eya";
       location ="Tunisia";
       status="activé";
tableData:any=[];
public userList:any =[];
  constructor(private router: Router,
    private serviceproduct:ProductService ,
    private userService: UserService) { }

  ngOnInit(): void {
  this.getProduct();
  this.getUsers();
}
  getProduct(){
    this.tableData = this.serviceproduct.productTable;
  }
  getStatus(){
    return this.status;
  }
  getMessage(){
    console.log("My new messsage !");
  }

  goToRegister(){
     this.router.navigate (["/register"])
  }
  getUsers(){
    this.userService.getUserFromPlaceholder().subscribe(result =>
      {
      this.userList = result;

    })
  }
}
