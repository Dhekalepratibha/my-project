import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prg',
  template: `
  <div class="progress">
  <div class="progress-bar" 
  role="progressbar" 
  [style.width.%]="wd" 
  [attr.aria-valuenow]="wd" 
  aria-valuemin="0" 
  aria-valuemax="100"
  {{wd}}%
  </div>
  </div>
  `,
  styles: [] 
})
export class PrgComponent implements OnInit {

  @Input()
  wd : number
  constructor() { }

  ngOnInit() {
  }

}
