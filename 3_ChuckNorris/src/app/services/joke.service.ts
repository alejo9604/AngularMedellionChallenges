import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/Rx';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

@Injectable()
export class JokeService {

  constructor( private http:Http ) { }

  getChuckNorisJoke(){
    return IntervalObservable.create(6000)
                             .startWith(1)
                             .flatMap( (i) => this.http.get("https://api.icndb.com/jokes/random") )
                             .map( res => {
                               return res.json().value;
                             });


  }

}
