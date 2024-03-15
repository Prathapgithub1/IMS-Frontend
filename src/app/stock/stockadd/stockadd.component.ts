import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-stockadd',
  templateUrl: './stockadd.component.html',
  styleUrl: './stockadd.component.css'
})
export class StockaddComponent {
 stockName:any;
 price:any;
 quantity:any;
 description:any;
 constructor(){

 }
 @ViewChild('stockForm')
 stockForm!: NgForm;

 onSubmit(){
  console.log(this.stockForm.value);
  
 }
}
