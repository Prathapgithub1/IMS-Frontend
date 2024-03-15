import { Component } from '@angular/core';
import { MasterService } from '../../Services/master.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {

  constructor(private _service: MasterService) {

  }
  ngOnInit(): void {
    this.JsonMasterGet()
  }
  products: any
  public async JsonMasterGet() {
    let data = {};
    let _res = await this._service.getData('getData', data);
    if (!_res) {
      console.log("no data")
    } else {
      console.log(_res)
      this.products = _res.data.Product_Table

    }
  }

  ProductData = {
    params: {
      Name: '',
      Category: '',
      Price: ''
    }
  }
  ProductTable = true
  CreateProduct = false
  EditProduct = false;
  AddButton() {
    this.ProductTable = false
    this.CreateProduct = true
  }
  SaveButton() {
    this.ProductTable = true;
    this.CreateProduct = false;
    if (this.ProductData.params.Name === "" && this.ProductData.params.Category === "" && this.ProductData.params.Price === "") {
      alert("Enter all fields are mandatory *")
    }
    else {
      this._service.postdata("insert-products", this.ProductData)
      this.JsonMasterGet()
    }
  }
  BackButton() {
    this.ProductTable = true;
    this.CreateProduct = false;

  }

 
  ProductEditBackButton() {
    this.ProductTable = true
    this.CreateProduct = false
    this.EditProduct = false;
  }

  public id:any
  ProductEditButton(data: any) {
    this.ProductTable = false
    this.CreateProduct = false
    this.EditProduct = true;
    this.id=data._id
    this.ProductData.params.Name=data.Name;
    this.ProductData.params.Category=data.Category;
    this.ProductData.params.Price=data.Price

  }
  ProductEditSaveButton() {
    let newData={
      _id:this.id,
      Name:this.ProductData.params.Name,
      Category: this.ProductData.params.Category,
      Price:this.ProductData.params.Price
    }
    this.ProductTable = true
    this.CreateProduct = false
    this.EditProduct = false;
    if(this.ProductData.params.Name ===""&&this.ProductData.params.Category ===""&&this.ProductData.params.Price ===""){
      alert("Enter all fields !")
    }else{
      this._service.postdata("update-Products",newData)
      alert("Updated succesfylly")
      this.JsonMasterGet()
    }

  }
 
  public async ProductDeleteButton(pro: any) {
    let id={
      "params":{
        _id:pro._id
      }
    
    }
    await this._service.postdata("delete-products",id)
    alert("Deleted item succesfully")
    this.JsonMasterGet()
  }

}
