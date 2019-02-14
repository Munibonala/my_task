import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http:HttpClient) { }
  public getDetails():any{
    return this._http.get("http://localhost:8000/details");
  }
}
