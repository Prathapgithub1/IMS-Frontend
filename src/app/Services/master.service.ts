import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(public http: HttpClient) { }

  public apiUrl = environment.apiUrl;
  public userDet: any = {};

  /* Start Session Storage Set/Get Functions */
  public storage = {
    get: (_key: any) => {
      let _data: any = sessionStorage.getItem(_key);
      return JSON.parse(_data) || [];
    },
    set: (_key: any, _val: any) => {
      let _data: any = JSON.stringify(_val, this.getCircularReplacer());
      return sessionStorage.setItem(_key, _data);
    },
    remove: (_key: any) => {
      return sessionStorage.removeItem(_key);
    }
  };

  public getCircularReplacer () {
    const seen = new WeakSet();
    return (key: any, value: any) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };

  /* End Session Storage Set/Get Functions */

  getToken() {
    //debugger;
    let _tkn = "";
    let _sData = sessionStorage.getItem("user");
    this.userDet = _sData ? JSON.parse(_sData) : {}; //this.appComp.storage.get("user");
    if (this.userDet['x-token']) {
      _tkn = this.userDet['x-tokne']
    }
    return _tkn;
  }

  public async getAnonymousAPICall(_method: any, _payload?: any) {
    let _response: any;
    let _httpHeaders = new HttpHeaders({
      "orgkey": _payload.orgkey
    });
    _payload = {}
    await this.http.get<any>((this.apiUrl + _method), { headers: _httpHeaders, params: _payload, observe: "response", withCredentials: true })
      .toPromise()
      .then(resp => {
        _response = resp?.body;
      }, err => {
        if (err.status === 0) {
          _response = { status: 500, desc: err.message, data: [] }
        }
        else {
          _response = err.error || err;
        }
      });
    return _response;
  }

  public getAuthAPICall(_method: any, _payload?: any): Observable<any[]> {
    let _httpHeaders = new HttpHeaders({
      "x-token": this.getToken()
    });
    // this.apiUrl = '';
    return this.http.get<any>((_method), { headers: _httpHeaders, params: _payload });
  }

  public async postAuthAPICall(_method: any, _payload?: any) {
    if (!_method || _method === "") {
      return { status: 500, desc: "Require Method Name ...", data: [] }
    }
    //console.log("this.getToken()", this.getToken())
    let _response: any;
    let _httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      "x-token": this.getToken()
    });
    await this.http.post<any>((this.apiUrl + _method), _payload, { headers: _httpHeaders, observe: "response", withCredentials: true })
      .toPromise()
      .then(resp => {
        _response = resp?.body;
      }, err => {
        if (err.status === 0) {
          _response = { status: "FAIL", desc: err.message, data: [] }
        }
        else {
          _response = err.error || err;
        }
      });
    return _response;
  }
public async getData(_method:any,_payload:any){
    if (!_method || _method === "") {
      return { status: 500, desc: "Require Method Name ...", data: [] }
    }
    //console.log("this.getToken()", this.getToken())
    let _response: any;
    let _httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      "x-token": this.storage.get('user')
    });
    await this.http.post<any>((this.apiUrl + _method), _payload, { headers: _httpHeaders, observe: "response", withCredentials: true })
      .toPromise()
      .then(resp => {
        _response = resp?.body;
      }, err => {
        if (err.status === 0) {
          _response = { status: "FAIL", desc: err.message, data: [] }
        }
        else {
          _response = err.error || err;
        }
      });
    return _response;
  }    
  public async postdata(_method:any,_payload:any){
    if (!_method || _method === "") {
      return { status: 500, desc: "Require Method Name ...", data: [] }
    }
    //console.log("this.getToken()", this.getToken())
    let _response: any;
    let _httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      "x-token": this.storage.get('user')
    });
    await this.http.post<any>((this.apiUrl + _method), _payload, { headers: _httpHeaders, observe: "response", withCredentials: true })
      .toPromise()
      .then(resp => {
        _response = resp?.body;
      }, err => {
        if (err.status === 0) {
          _response = { status: "FAIL", desc: err.message, data: [] }
        }
        else {
          _response = err.error || err;
        }
      });
    return _response;
  }  
}
