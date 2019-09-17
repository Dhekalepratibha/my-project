import { Component,Input,Output,EventEmitter, SimpleChanges, DoCheck } from '@angular/core';
import {
  OnChanges,
   OnInit,
   AfterContentInit,
   AfterContentChecked,
   AfterViewInit,
   AfterViewChecked,
   OnDestroy
  } from '@angular/core';
import { CardInfo } from './card.domain';
import { cardEvent } from './my-card.event';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css']
})
export class MyCardComponent implements OnChanges ,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  @Input()
  config : CardInfo

  @Output()
  okey : EventEmitter<cardEvent> =new EventEmitter()

  constructor() { }
  onClk(parent :string){
    const evDt : cardEvent ={
      tmp :Date.now(),
      parent : parent,
      card : this.config
    }
    this.okey.emit()
  }
  ngOnChanges(ch : SimpleChanges){
   console.log('ngOnchanges',ch)
  }
  ngOnInit() {
    console.log('ngOnInit')
  }

  ngDoCheck(){
    console.log('ngDoCheck')
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked')
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked')
  }
  ngOnDestroy(){
    console.log('ngOnDestroy')
  }
}
