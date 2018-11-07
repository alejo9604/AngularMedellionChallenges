import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  face:string = '';

  ngOnInit(){
    setInterval( ()=> {
       this.randomFace();
     },2000);
  }

  randomFace(){
    this.face =  Math.random().toString();
  }

}
