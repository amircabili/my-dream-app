import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styles: []
})

export class DepartmentDetailComponent implements OnInit {

  public employeeProffessionId;

  constructor (private route: ActivatedRoute) { }

  ngOnInit(){
      let id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.employeeProffessionId = id;
  }

}
