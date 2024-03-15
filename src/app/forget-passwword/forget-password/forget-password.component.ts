import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../../Services/master.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
  constructor(private router: Router, private service: MasterService) {

  };



  OTP: any = false
  forgetPage = true
  passwordChange = false

  // forgetForm:FormGroup = new FormGroup({
  //   userEmail:new FormControl("",[]),
  //   userMobile:new FormControl("",[])
  // });
  Forget: any = {
    params: {
      Username: "",
      Email: ""
    }
  }


  otpVerification: any = {
    params: {
      otp: ""
    }
  }

  public otp: any
  public forgetData: any
  public async onClick() {
    if (!this.Forget.params.Username && !this.Forget.params.Email) {
      alert("please enter all fields")
    }
    else {
      let forgetResponse = await this.service.postdata('forget', this.Forget)
      this.forgetData = forgetResponse
      if (forgetResponse.status === 200 || forgetResponse.status === true) {
        // this.router.navigate(['/'])
        this.OTP = true;
        this.forgetPage = false
        this.passwordChange = false
        this.otp = forgetResponse
        sessionStorage.setItem('otp', this.otp.OTP)
      } else {
        alert("error")
      }
    }


  }
  backButton() {
    this.router.navigate([''])
  }

  verify() {
    let otp = sessionStorage.getItem('otp')
    if (this.otpVerification.params.otp === otp) {
      alert("Success")
      // this.router.navigate(['/view/dashboard'])
      this.passwordChange = true;
      this.OTP = false
    } else {
      alert("please Enter valid OTP")
    }
  }
  resend() {
    this.onClick()
  }

  changePassword: any = {
    params: {
      password: '',
      retype: ''
    }
  }

  public async changePasswordMEthod() {
    if (this.changePassword.params.password === this.changePassword.params.retype) {
      let obj = {
        _id: this.forgetData.data[0]._id,
        Username: this.forgetData.data[0].Username,
        Password: this.changePassword.params.password,
        Email: this.forgetData.data[0].Email,
        UserId: this.forgetData.data[0].UserId,
        Gender: this.forgetData.data[0].Gender,
        Status: this.forgetData.data[0].Status,
        Address: this.forgetData.data[0].Address,

      }

      let response = await this.service.postdata("update-data", obj)
      if (response.status === 200 || response.status === true) {
        alert("password changed succesfully")
        this.router.navigate([''])
      }
    }
    else{
      alert("Enter correct password in boath fields")
    }



  }


}
