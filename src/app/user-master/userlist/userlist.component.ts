import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../Services/master.service';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent implements OnInit {
  constructor(private service:MasterService)
  {
    
  }
  Addview = false
  table = true
  EditTemplate=false
  ngOnInit(): void {
    this.JsonMasterGet()
  }
  // users:any
  // public async JsonMasterGet() {
  //   let data = {};
  //   let _res = await this.service.getData('getData', data);
  //   if(!_res){
  //     console.log("no data")
  //   }else{
  //     console.log(_res)
  //     this.users=_res.data.User_table
      
  //   }
  // } 
  userData:any = {
    params: {
      Username: '',
      Gender: '',
      Role: '',
      Password: '',
      Email: '',
      Address:'',
      UserId:'',
      Status:''
    }
  };


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
  add() {
    this.Addview = true
    this.table = false
  }
  backButton() {
    this.Addview = false
    this.table = true
  }
  public async saveButton() {
    this.Addview = false;
    this.table = true;
    let _responseData = await this.service.postdata("insert-users", this.userData)
    this.JsonMasterGet()
  }
  public id:any;
  EditButton(user:any){
    this.id=user._id;
    this.table=false;
    this.EditTemplate=true
    this.userData.params.Status=user.Status
    this.userData.params.Username=user.Username
    this.userData.params.Gender=user.Gender
    this.userData.params.UserId=user.UserId
    this.userData.params.Role=user.Role
    this.userData.params.Password=user.Password
    this.userData.params.Email=user.Email
    this.userData.params.Address=user.Address
    
  }
  EditBack(){
    this.table=true;
    this.Addview=false;
    this.EditTemplate=false
  }
  public async EditSave(){
    this.table=true;
    this.Addview=false;
    this.EditTemplate=false
    let newData={
      _id:this.id,
      Status: this.userData.params.Status,
      Username:this.userData.params.Username,
      Gender:this.userData.params.Gender,
      UserId:this.userData.params.UserId,
      Role:this.userData.params.Role,
      Password:this.userData.params.Password,
      Email:this.userData.params.Email,
      Address:this.userData.params.Address

    }
    if(!newData){
      alert("Enter all Fields are mandatory")
    }
    else{
      alert("User list is updated")
      await this.service.postdata("update-data",newData)
      this.JsonMasterGet()
    }
    

  }
  // delete_id:any
  DeleteButton(user:any){
    let deleteData={
      "params":{
        _id:user._id
      }
    }

    this.service.postdata("delete-users",deleteData)
    alert("delete succes fully")
    this.JsonMasterGet()
  }


}
