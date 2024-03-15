import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  constructor(private router:Router){

  };
 productCategory:FormGroup = new FormGroup({
   categoryName:new FormControl("",[]),
   price:new FormControl("",[]),
   quantity: new FormControl("",[]),
   description:new FormControl("",[])
 });

 addProduct(){
  this.router.navigate(["/createproduct"])
  console.log(this.productCategory.value);
  
 }
}
