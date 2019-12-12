import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {  Router , ActivatedRoute , ParamMap} from '@angular/router';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  template: 
  `<div>
        <div class="container">
        <div class="row">
            <div class="col-sm-5">
            <h2 class="text-danger">Employee Name</h2>
                <ul *ngFor='let employee of employees'>
                    <li>Name:{{employee.name}}</li>
                </ul>
            </div>
            <div class="col-sm-7"> 
            <h3 class="text-danger">Professions list Type </h3>
                <ul class="items">
                <li *ngFor='let profession of professions'>
                    <p>
                      <button (click)="onSelect(profession)" [class.selected]="isSelected(profession)" class=" btn btn-primary">
                          <span class="badge"> {{profession.id}}  </span> {{profession.ProfessionName}}
                      </button>
                    </p>
                </li>
                </ul>
            </div>
        </div>
      </div> 
 </div>`
 ,

  styleUrls: ['./employee-list.component.less']
})


export class EmployeeListComponent implements OnInit {

  public selectedId;
  public employees = [];
  public errorMsg;

  professions = [
    { 
      "id":1,
      "ProfessionName":"Angular_Developer" 
  },
  { 
      "id":2,
      "ProfessionName":"Node_Developer" 
  },
  { 
      "id":3,
      "ProfessionName":"MongoDb_Developer"   
  },
  { 
      "id":4,
      "ProfessionName":"Ruby_Developer"  
  },
  { 
      "id":5,
      "ProfessionName":"Bootstrap_Developer" 
  }
]

  constructor ( private _employeeService: EmployeeService , private router: Router ,private route: ActivatedRoute) { }

  ngOnInit() {
    //this.employees = this._employeeService.getEmployees();
    this._employeeService.getEmployees()
          .subscribe( (data: any) => this.employees = data);

          this.route.paramMap.subscribe((params: ParamMap) => {
            let id = parseInt(params.get('id'));
            this.selectedId = id;

             //console.log(this.route.snapshot.params['id']);
            //console.log(this.route);

          });
 

   }

   onSelect(profession){
     // this.router.navigate(['/employee-list', profession.id]);
        this.router.navigate( [profession.id] , {relativeTo: this.route} );
   }

   isSelected(profession){
     return profession.id === this.selectedId;
   }

}
