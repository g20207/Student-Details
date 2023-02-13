import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
public data: any;
  constructor() {
    this.data = JSON.parse(localStorage.getItem("key"));
    console.log(this.data);
   }

  ngOnInit() {
  }
}
