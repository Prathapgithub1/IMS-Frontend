import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MasterService } from '../../Services/master.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnInit {
  newUser = {
    params:{
    Username: '',
    Password: '',
    Email: '',
    Role: '',
    UserId:'',
    Gender:'',
    Status:'',
    Address:''
  }};
  constructor(private service: MasterService, private _router: Router) { }
  ngOnInit(): void {
    
  }
  public async signUpUsers() {
    if (this.newUser.params.Username === "" && this.newUser.params.Password === "" && this.newUser.params.Email === "" && this.newUser.params.Role === ""&& this.newUser.params.UserId === ""&&this.newUser.params.Gender === ""&& this.newUser.params.Status === "" &&  this.newUser.params.Address === "" ) {
      alert("Please Enter all fields")
    }else{
      let resposne=await this.service.postdata("insert-users",this.newUser)
      this._router.navigate([''])
      this.JsonMasterGet()
      
    }
  }
  onLogin() {
    this._router.navigate(['/login']);
  }
  Users:any;
  public async JsonMasterGet() {
    let data = {};
    let _res = await this.service.getData('getData', data);
    if (!_res) {
      console.log("no data")
    } else {
      this.Users = _res.data.User_table
      console.log(this.Users)

    }
  }
}
