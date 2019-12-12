import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.less']
})

export class EmployeeDetailComponent implements OnInit {

  public employees = [];
  public errorMsg;

  constructor ( private _employeeService: EmployeeService ) { }

  ngOnInit() {

    //this.employees = this._employeeService.getEmployees();

    this._employeeService.getEmployees()
          .subscribe( (data: any) => this.employees = data);
   }

}