import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  ParamMap } from '@angular/router';

@Component({
  selector: 'app-employees-proffessions',
  templateUrl: './employee-proffessions.component.html',
  template: 
  `  <div>
  <span>Employee proffessions works! you selected Proffession id 
    <h3>{{employeeProffessionId}}</h3>
    </span>
  <p>
    <router-outlet></router-outlet>
    <br>
        <button (click)="showOverview()" class="btn btn-primary mr-2">Overview</button>
        <button (click)="showContact()" class="btn btn-primary pr-2">Contact</button>
    </p>
      <p>
        <br>
          <button (click)="goPrevious()" class="btn btn-primary mr-2">Previous</button>
          <button (click)="goNext()" class="btn btn-primary pr-2">Next</button>
      </p>
      <p>
          <button (click)="goBackToProffessions()" class="btn btn-primary mt-2">go Back To Proffessions</button>
      </p>

      <p>
      <button routerLink="/employee-list" class="btn btn-primary mt-2">go Back  </button>
  </p>

      <p>
      <button [routerLink]="['/employee-list', 2]" class="btn btn-primary mt-2">Get Employee with id = 2 </button>
  </p>
  </div>  ` ,

  styles: []
})
export class EmployeesProffessionsComponent implements OnInit {

  public employeeProffessionId;
  public employeeProfessionName;

  constructor (private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.employeeProffessionId = id;

    this.route.paramMap.subscribe((params: ParamMap) => {

        let id = parseInt(params.get('id'));
        this.employeeProffessionId = id;
         
        // let ProfessionName = params.get('ProfessionName');
        // alert(ProfessionName);
        // //this.employeeProffessionId = ProfessionName;

      });
  }

  goPrevious(){
    let previousId = this.employeeProffessionId - 1;
    this.router.navigate(['/employee-list', previousId])
  }

  goNext(){
      let NextId = this.employeeProffessionId + 1;
      this.router.navigate(['/employee-list', NextId])
  }

  goBackToProffessions(){
    let selecetedId = this.employeeProffessionId ? this.employeeProffessionId : null;
    //this.router.navigate(['/employee-list', {id: selecetedId , ProfessionName: "ProfessionName"} ])
    this.router.navigate(['../', {id :selecetedId}], {relativeTo: this.route});
  }

  showOverview(){
    this.router.navigate(['overview',this.employeeProffessionId], {relativeTo: this.route} ); 
  }

  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.route} ); 
  }

}
