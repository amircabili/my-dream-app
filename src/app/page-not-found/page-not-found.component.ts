import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div>
        <h1>page-not-found works!</h1>
    </div>
  `,
  styles: []
})

export class PageNotFoundComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
