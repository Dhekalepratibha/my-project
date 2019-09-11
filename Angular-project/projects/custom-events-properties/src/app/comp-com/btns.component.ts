import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-btns',
  template: `
    <input type="button" class="btn btn-info" value="Decrement" (click)="onOp(-1)">
    <input type="button" class="ml-1 btn btn-info" value="Increment" (click)="onOp(1)">
  `,
  styles: []
})
export class BtnsComponent implements OnInit {


  @Output()
  operation :EventEmitter =new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  onOp(op:number) {
    this.operation.emit(op)
  }

}
