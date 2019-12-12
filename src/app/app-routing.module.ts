import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeesProffessionsComponent } from './employees-proffessions/employees-proffessions.component';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/employee-list",
    pathMatch: "full"
  },
  {
    path: "employee-list",
    component: EmployeeListComponent
  },
  {
    path: "employee-list/:id", 
    component: EmployeesProffessionsComponent,
    children: [
      // { path: "", redirectTo: "overview", pathMatch: "full" },
      { path: "overview/:id", component: EmployeeOverviewComponent },
      { path: "contact", component: EmployeeContactComponent }
    ]
  },
  {
    path: "employee-detail",
    component: EmployeeDetailComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})


export class AppRoutingModule { }
export const routingComponents = [EmployeeListComponent,EmployeeDetailComponent,PageNotFoundComponent,EmployeeOverviewComponent,EmployeeContactComponent]

