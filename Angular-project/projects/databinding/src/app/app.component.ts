import { Component } from '@angular/core';
import { createTokenForExternalReference } from '@angular/compiler/src/identifiers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alTxt = `
       Use modern web platform capabilities to deliver app-like experiences.
       High performance, offline, and zero-step installation.
  `;

  typ ="text"
  dtAt ='hi codekul'

  clkFn(ev: MouseEvent){
    console.log(ev)

  }
}

