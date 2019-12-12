import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  
  templateUrl: 'test.component.html',
  styleUrls: ['./test.component.less'],
  styles: [` `],

})
export class TestComponent implements OnInit {

  public name = "TestComponent";
  public siteUrl = window.location.href;
  public myId =  "testID" ;
  public isDisabled =  true ;
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public greeting = true;

  public displayName = true;

  public  messageClasses= {
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }

  logMessage(value){
      console.log(value);
  }

  onClick(event){
    console.log(event);
    this.greeting = event.type;
  }

  constructor() { }
  ngOnInit() {}

    greetUser(){
      return "(greetUser) Hello 11111111 " + this.name;
    }
}
