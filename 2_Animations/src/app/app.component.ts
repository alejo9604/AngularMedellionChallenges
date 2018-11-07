import { Component} from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  query,
  stagger,
  animateChild
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('faceAnimation', [
      state('void', style({
          transform: 'rotateX(0deg) rotateZ(0deg)'
      })),

      //Rotate State
      state('rotate', style({
        transform: 'rotateX(360deg) rotateZ(0deg)'
      })),


      transition('* => void', animate('0ms ease-in')),

      //Rotate transition
      transition('void => rotate', animate('2000ms ease-in')),


      //Hinge animation
      transition('void => hinge', [
        animate(3000, keyframes([
          style({transform: 'rotate(0deg)', transformOrigin: 'top left', animationTimingFunction: 'ease-in', offset: 0}),
          style({transform: 'rotate(80deg)', transformOrigin: 'top left', animationTimingFunction: 'ease-in', offset: 0.2}),
          style({transform: 'rotate(40deg)', transformOrigin: 'top left', animationTimingFunction: 'ease-in', offset: 0.4}),
          style({transform: 'rotate(80deg)', transformOrigin: 'top left',  animationTimingFunction: 'ease-in-out',offset: 0.6 }),
          style({opacity: 0,   animationTimingFunction: 'ease-in-out',offset: 0.8 }),
        ]))
      ]),

      //Crazy animation
      transition('void => crazy',
       animate('4000ms', keyframes([
        style({transform: 'rotate(0deg) scaleY(1)', offset: 0}),
        style({transform: 'rotate(1080deg) scaleY(2)', offset: 1})
      ]))),
    ]),


    //Hidden animation
    trigger('hiddenAnimation', [
      state('hide', style({
        opacity: 0
      })),

      transition('void => hide', [

        query('.bye', [                           //Get elements with bye class
          style({ opacity: 1 }),                  //Init state
          stagger(500, [                          //Delay between elements animation
            animate('1s', style({ opacity: 0 }))  //End state
          ])
        ])

      ]),
    ]),
  ]
})

export class AppComponent {

  public roundOut:boolean = false;
  public state:string = 'void';
  public hide:string = 'void';

  onRoundOut(){
    this.roundOut = true;
  }

  onRotate(){
    this.state = 'rotate';
  }

  onHinge(){
    this.state = 'hinge';
  }

  onCrazy(){
    this.state = 'crazy';
  }
  onHide(){
    this.hide = 'hide';
    console.log("Hide");
  }

  onLeave(){
    this.roundOut = false;
    this.state = 'void';
  }
}
