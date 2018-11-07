import { Component } from '@angular/core';

import { JokeService } from './services/joke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public joke:string;

  constructor( private _jokeSer:JokeService ){

    this._jokeSer.getChuckNorisJoke().subscribe( res => {
      this.joke = res.joke;
    },
      error => {
        this.joke = `Local service error: ${error.json().error || error.json().Message || 'Server error'}`;
        console.log(error);
      }
    );

  }

}
