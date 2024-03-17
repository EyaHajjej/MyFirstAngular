import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from 'src/app/models/login';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {
public login : LoginModel;
confirmPass: any;
  constructor() {
    this.login = new LoginModel(); }

  ngOnInit(): void {
  }
onSubmit(form: NgForm){
 console.log(this.login) ;
}
}
