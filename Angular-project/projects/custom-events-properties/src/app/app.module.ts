import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyCardComponent } from './my-card/my-card.component';
import { CompComComponent } from './comp-com/comp-com.component';
import { BtnsComponent } from './comp-com/btns.component';
import { PrgComponent } from './comp-com/prg.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCardComponent,
    CompComComponent,
    BtnsComponent,
    PrgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
