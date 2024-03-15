import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  constructor(private _router:Router){

  };
  createForm:FormGroup = new FormGroup({
    username:new FormControl("",[]),
    displayname:new FormControl("",[]),
    gender:new FormControl("",[]),
    user:new FormControl("",[]),
    password:new FormControl("",[]),
    mobile:new FormControl(null,[]),
    email:new FormControl("",[]),
    address:new FormControl("",[])
  });
  addPerson(){
    this._router.navigate(["/employees"])
    console.log(this.createForm.value);
    this.createForm.reset();
    
  }
}
