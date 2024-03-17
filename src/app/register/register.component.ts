import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  FirstName="Eya";
  active = true;
  dataList=[
    {name:"Eya", code:113 , country:"Tunisia"},
    {name:"salma", code:621 , country:"Marrocco"},
    {name:"sarra", code:287 , country:"Egypt"}
  ]
  name="Moussa";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToUser(){
  this.router.navigate(["/user"])
           }
}
