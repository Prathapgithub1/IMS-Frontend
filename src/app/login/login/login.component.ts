import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { MasterService } from '../../Services/master.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  constructor(public router: Router, private service: MasterService) { }
  ngOnInit(): void { }
  newUser = {
    params: {
      Username: "",
      Password: ""
    }
  };
  public name: any
  public async onLogin() {
    this.name = localStorage.setItem("name", this.newUser.params.Username)
    // this.service.getToken(this.newUser).subscribe((res:any)=>
    // {
    //   localStorage.setItem("token",res)
    //   alert("login successfull")
    //   this.router.navigate(["/view"])
    //   console.log("token",res)
    // },(error)=>
    // {
    //   alert("invalid credentials")
    // })
    let respdata = await this.service.postAuthAPICall(
      'auth-user',
      this.newUser
    );
    if (respdata.status === 200) {
      this.service.storage.set('user', respdata.data);
      // localStorage.setItem('lastDate', new Date().toISOString())
    

      // this.JsonMasterGet()
      this.router.navigate(['/view']);
    } else {
      alert('invalid credentials');
    }
  }
  // public async JsonMasterGet() {
  //   let data = {};
  //   let _res = await this.service.getData('getData', data);
  //   if(!_res){
  //     console.log("no data")
  //   }else{
  //     console.log(_res)
  //   }
  // } 

  goToSignup() {
    this.router.navigate(['/signup']);
  }

  forget() {
    this.router.navigate(['/forget'])
  }
}
