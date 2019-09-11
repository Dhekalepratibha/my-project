import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { CardInfo } from './card.domain';
import { cardEvent } from './my-card.event';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css']
})
export class MyCardComponent implements OnInit {

  @Input()
  config : CardInfo

  @Output()
  okey : EventEmitter<cardEvent> =new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  onClk(parent :string){
    const evDt : cardEvent ={
      tmp :Date.now(),
      parent : parent,
      card : this.config
    }
    this.okey.emit()
  }
}
