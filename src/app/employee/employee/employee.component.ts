import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../Services/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  constructor(private _service: MasterService, private _router: Router) {

  }
  ngOnInit(): void {
    this.JsonMasterGet()
  }
  employee: any
  public async JsonMasterGet() {
    let data = {};
    let _res = await this._service.getData('getData', data);
    if (!_res) {
      console.log("no data")
    } else {

      this.employee = _res.data.Employee_Table

    }



  }
  EmployeeTable = true
  createEmployee = false
  EditEmployee = false
  addEmployee() {
    this.EmployeeTable = false
    this.createEmployee = true
  }
  EmployeeData: any = {
    params: {
      FirstName: '',
      LastName: '',
      Department: '',
      Position: '',
      Salary: ""
    }
  }

  public async SaveButton() {
    this.EmployeeTable = true
    this.createEmployee = false
    if (this.EmployeeData.params.FirstName === "" && this.EmployeeData.params.LastName === "" && this.EmployeeData.params.Department === "" && this.EmployeeData.params.Position === "" && this.EmployeeData.params.Salary === "") {
      alert("Fields are empty please fill it")
    } else {
      alert("Inserted succesfully")
      let _EmployeeInsert = await this._service.postdata("insert-Employee", this.EmployeeData)
      this.JsonMasterGet()
    }

  }
  BackButton() {
    this.EmployeeTable = true;
    this.createEmployee = false
  }

  public id: any;
  Edit(emp: any) {
    this.EmployeeTable = false
    this.createEmployee = false
    this.EditEmployee = true
    this.id = emp._id
    this.EmployeeData.params.FirstName = emp.FirstName
    this.EmployeeData.params.LastName = emp.LastName
    this.EmployeeData.params.Department = emp.Department
    this.EmployeeData.params.Position = emp.Position
    this.EmployeeData.params.Salary = emp.Salary


  }
  public async EditSaveButton() {
    this.EmployeeTable = true
    this.createEmployee = false
    this.EditEmployee = false;
    let newData = {
      _id: this.id,
      FirstName: this.EmployeeData.params.FirstName,
      LastName: this.EmployeeData.params.LastName,
      Department: this.EmployeeData.params.Department,
      Position: this.EmployeeData.params.Position,
      Salary: this.EmployeeData.params.Salary

    }



    if (this.EmployeeData.params.FirstName === "" && this.EmployeeData.params.LastName === "" && this.EmployeeData.params.Department === "" && this.EmployeeData.params.Position === "" && this.EmployeeData.params.Salary === "") {
      alert("Fields are empty please fill it")
    } else {
      alert("Inserted succesfully")
      let _EmployeeInsert = await this._service.postdata("update-Employee", newData)
      this.JsonMasterGet()
    }
  }
  EditBackButton() {
    this.EmployeeTable = true
    this.createEmployee = false
    this.EditEmployee = false;
  }

  public async remove(data:any){
    let deleteData={
      "params":{
        _id:data._id
      }
    }
    await this._service.postdata("delete-Employee",deleteData)
    alert("Deleted succesfully")
    this.JsonMasterGet()

  }



}
