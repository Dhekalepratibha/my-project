import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BodyComponent } from './body/body.component';
import { InfoComponent } from './body/info.component';
import { PricingCardComponent } from './body/pricing-card.component';
import { FooterComponent } from './footer/footer.component';
import { LinksComponent } from './footer/links.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BodyComponent,
    InfoComponent,
    PricingCardComponent,
    FooterComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
