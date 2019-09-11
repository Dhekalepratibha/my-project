import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataBindingExampleComponent } from './data-binding-example/data-binding-example.component';
import{FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    DataBindingExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
