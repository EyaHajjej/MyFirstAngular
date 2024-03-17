import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http :HttpClient) { }
getUserFromPlaceholder(){
let myData = this.http.get <any>( "https://jsonplaceholder.typicode.com/users");
return myData ;}

}
