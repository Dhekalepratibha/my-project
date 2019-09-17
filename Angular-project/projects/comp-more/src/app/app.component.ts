import { Component, ElementRef, ViewChild } from '@angular/core';
import { unwrapResolvedMetadata } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('rw' , {static : true})
  rw : ElementRef

  @ViewChild('dt' , {static : true})
  dt : ElementRef
  title = 'comp-more';

  clk(){
    this.rw.nativeElement.style.border= '2px solid red'
 //console.log(usNm)
 //usNm .style.border='1px solid red'

 this.dt.nativeElement.style.border='2px solid red'
  }
}
