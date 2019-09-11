import { Component } from '@angular/core';
import { CardInfo } from './my-card/card.domain';
import { cardEvent } from './my-card/my-card.event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-events-properties';

  obj : CardInfo={
    imgUrl : 'http://www.codekul.com/img/CODEKUL-min.png',
    title : 'Codekul',
    info : 'Cards support a wide variety of content, including images,', 
    navUrl :'https://getbootstrap.com/docs/4.3/components/card/'
  }

  onOkey(evDt:cardEvent){
    console.log(evDt)

  }
}
