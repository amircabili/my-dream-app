import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {  Router , ActivatedRoute , ParamMap} from '@angular/router';



@Component({
  selector: 'app-employee-overview',
  template: `
  
    <br>
    {{employeeProffessionId}}
      <h2 class="text-danger">Employee Overview</h2>
        <ul *ngFor='let employee of employees'>
          <li *ngIf="employee.id == employeeProffessionId">
             <br> 
            <H3> <b> Id: {{employee.id}}  </b></H3>
            <H3> <b> Name: {{employee.name}} </b></H3>
            <H3> <b> Age: {{employee.age}} </b></H3>
          </li>
        </ul>
  `,

  styleUrls: []
})

export class EmployeeOverviewComponent implements OnInit {

  public employees = [];
  public errorMsg;
  public selectedId;
  public employeeProffessionId;
  

  constructor (  private _employeeService: EmployeeService  ,private route: ActivatedRoute ) { }

  ngOnInit() {

    let id = parseInt(this.route.parent.snapshot.paramMap.get('id'));
    this.employeeProffessionId = id;
    //alert(this.employeeProffessionId );

    this._employeeService.getEmployees()
    .subscribe( (data: any) => this.employees = data);

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;

       // this.route.parent.params.switchMap((params: ParamMap) => {
      //   let id = parseInt(params.get('id'));
      //   this.selectedId = id;
      // });
      //console.log(this.route);

    });
  }

}
