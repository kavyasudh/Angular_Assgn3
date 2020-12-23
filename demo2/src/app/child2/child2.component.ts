import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  template:`
  <h1>company details </h1>
  <p>Name:
  {{info.name}}<br>Address:{{info.address}}
  </p>
  `,
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
 @Input() info:any;
  constructor() { }

  ngOnInit() {
  }

}
