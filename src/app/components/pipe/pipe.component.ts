import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
public firstName = "Eya";
public title = "pipe video in youtube channel";
public student =
{"FullName":"Eya hajjej" , "School":"School name"
}
public myDate = new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
