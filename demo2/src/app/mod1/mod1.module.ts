import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp12Component } from './mod2/comp12/comp12.component';
import { Mod2Module } from './mod2/mod2.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,Mod2Module
  ],
  exports:[
    Comp12Component
  ]


})
export class Mod1Module { }
