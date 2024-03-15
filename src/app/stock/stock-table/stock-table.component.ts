import { Component } from '@angular/core';
import { MasterService } from '../../Services/master.service';

@Component({
  selector: 'app-stock-table',
  templateUrl: './stock-table.component.html',
  styleUrl: './stock-table.component.css'
})
export class StockTableComponent {

  constructor(private _service:MasterService)
  {

  }
  SockTable=true
  CreateStock=false
  Editstock=false

  ngOnInit(): void {
    this.JsonMasterGet()
  }
  stocks:any
  public async JsonMasterGet() {
    let data = {};
    let _res = await this._service.getData('getData', data);
    if(!_res){
      console.log("no data")
    }else{
      console.log(_res)
      this.stocks=_res.data.Stock_Table
      
    }
  }  

  StockData={
    params:{
      Name:'',
      Quantity:'',
      location:''
    }
  }
  AddButton(){
    this.SockTable=false;
    this.CreateStock=true;
  }
  public async SaveButton(){
    this.SockTable=true;
    this.CreateStock=false;
    if(this.StockData.params.Name==="" && this.StockData.params.Quantity===""&&this.StockData.params.location===""){
      alert("Enter all Fields are Mandatory *")
    }else{
      await this._service.postdata("insert-stocks",this.StockData)
      this.JsonMasterGet()
    }
  }
  BackButton(){
    this.SockTable=true;
    this.CreateStock=false;
  }
  public id:any;
  StockEditButton(data:any){
    this.SockTable=false
    this.CreateStock=false
    this.Editstock=true
    this.id=data._id
    this.StockData.params.Quantity=data.Quantity;
    this.StockData.params.location=data.location;
  }
  public async StockDeleteButton(values:any){
    let id={
      "params":{
        _id:values._id,
        ProductID:values.ProductID
      }
    }
    await this._service.postdata("delete-stocks",id)
    alert("this stock deleted in ProductTable also")
    this.JsonMasterGet()
  }
 public async EditSaveButton(){
    let newData={
      _id:this.id,
      Quantity:this.StockData.params.Quantity,
      location:this.StockData.params.location

    }
    if(this.StockData.params.Quantity ===""&& this.StockData.params.location===""){
      alert("Enter all fields mandatory *")
    }else{
      await this._service.postdata("update-stocks",newData)
      alert("Updated succesFully")
      this.JsonMasterGet()
    }
    this.SockTable=true
    this.CreateStock=false
    this.Editstock=false

  }
  EditBackButton(){
    this.SockTable=true
    this.CreateStock=false
    this.Editstock=false
  }


}
