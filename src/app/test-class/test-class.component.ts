import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-class',
  templateUrl: './test-class.component.html',
  styleUrls: ['./test-class.component.css']
})
export class TestClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Tunisia =true;
  Brazil= false;
  Algeria= false
  changeCountry(){
    this.Tunisia = false;
    this.Brazil = true;
    this.Algeria = false;
  }
}
