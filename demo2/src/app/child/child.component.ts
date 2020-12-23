import { hostViewClassName } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import {  EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() dataEvent= new EventEmitter();

  info={
    name:'hcl',
    address:'pune'

  };

  constructor() { }

  ngOnInit() {
  }
  callParentData(){
    this.dataEvent.emit(this.info); 
  }

}
