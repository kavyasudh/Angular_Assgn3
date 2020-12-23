import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo2';
  info1={
    name:'hcl',
    address:'pune'
  };
  data(info:any){
    alert(`company details are:${info.name},${info.address}`);
  }
}
