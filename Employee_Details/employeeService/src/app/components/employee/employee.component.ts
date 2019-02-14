import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  private result:any;
  private employeeSubscribe:any;
  constructor(private _service:EmployeeService) { }
  ngOnInit() {
    this.employeeSubscribe = this._service.getDetails().subscribe(
      (posRes):any=>{
        this.result=posRes;
      },
      (err:HttpErrorResponse)=>{
        if(err.error instanceof Error){
          console.log("Client Side Error");
        }else{
          console.log("Server Side Error");
        }
      });
  }
  ngOnDestroy(){
    this.employeeSubscribe.unsubscribe();
  }
}
