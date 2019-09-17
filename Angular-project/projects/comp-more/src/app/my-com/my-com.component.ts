import { Component, OnInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-my-com',
  templateUrl: './my-com.component.html',
  styleUrls: ['./my-com.component.css']
})
export class MyComComponent implements OnInit {

  @ContentChild('dt',{static : true})
  dt : ElementRef

  constructor() { }

  ngOnInit() {

    this.dt.nativeElement.style.border = '3px solid blue'
  }

  
}
