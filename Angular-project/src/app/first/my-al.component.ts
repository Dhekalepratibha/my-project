import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-al',
  template: `
  <div class="alert alert-info mt-2">
  Looking for an opinionated guide to Angular syntax, conventions, and application structure? Step right in! This style guide presents preferred conventions and, as importantly, explains why.
  </div>
  `,
  styles: []
})
export class MyAlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
