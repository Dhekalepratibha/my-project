import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-example',
  templateUrl: './data-binding-example.component.html',
  styleUrls: ['./data-binding-example.component.css']
})
export class DataBindingExampleComponent implements OnInit {

  bkCl :string
  wd : number=100
  val :string ='android'
  constructor() { }

  ngOnInit() {
  }

}
