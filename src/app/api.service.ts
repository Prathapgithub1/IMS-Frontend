import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getlength="http://localhost:8080/find"
  constructor(private _http:HttpClient) { }
  getlengths()
  {
    return this._http.get(this.getlength)
  }
}
