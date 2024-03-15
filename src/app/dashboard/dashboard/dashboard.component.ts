import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { MasterService } from '../../Services/master.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  data: any;
  options: any;
  constructor(public router:Router,private service:MasterService){
    this.data = {
      labels: ['Today', 'Yesterday', 'Last Week', 'This Week', 'Last Month'],
      datasets: [
        {
          data: [100, 500, 50, 1000, 15],
          backgroundColor: ['red', 'green', 'blue', 'orange', 'brown']
        }
      ]
    };

    this.options = {
      legend: {
        display: true
      },
      title: {
        display: true,
        text: 'User'
      }
    };
  };
  ngOnInit():void{
    this.JsonMasterGet()
    this.router.navigate(['/view/dashboard'])
  }
  users:any
  employee:any;
  products:any
  stocks:any
  public async JsonMasterGet() {
    let data = {};
    let _res = await this.service.getData('getData', data);
    if(!_res){
      console.log("no data")
    }else{
      console.log(_res)
      this.users=_res.data.User_table.length
      this.employee=_res.data.Employee_Table.length
      this.products=_res.data.Product_Table.length
      this.stocks=_res.data.Stock_Table.length
    }
  } 

  Users(){
    this.router.navigate(['/view/users'])
  }
  Products(){
    this.router.navigate(['/view/products'])
  }
  Employees(){
    this.router.navigate(['/view/employees'])
  }
  Stocks(){
    this.router.navigate(['/view/stocks'])
  }
}
