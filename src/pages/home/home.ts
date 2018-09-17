import { Component, EventEmitter } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { trigger, transition, useAnimation, state, style, animate, keyframes } from '@angular/animations';

import * as kf from './keyframes'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations:[
   
    trigger('FlipAnim', [

      state('goFlip', style({
        transform: 'rotateY(180deg)'
      })),

      state('goBack', style({
        transform: 'rotateY(0)'
      })),

      transition('goFlip => goBack', animate('200ms ease-out')),
      transition('goBack => goFlip', animate('400ms ease-in'))
    ]),

    trigger('cardAnimator',[
    
      transition('* => zoomOutDown', animate(1000, keyframes(kf.zoomOutDown))),

      transition('* => wobble', animate(1000, keyframes(kf.wobble))),
      transition('* => swing', animate(1000, keyframes(kf.swing))),
      transition('* => jello', animate(1000, keyframes(kf.jello))),
      transition('* => zoomOutRight', animate(1000, keyframes(kf.zoomOutRight))),
      transition('* => zoomOutLeft', animate(1000, keyframes(kf.zoomOutLeft))),
      transition('* => slideOutLeft', animate(1000, keyframes(kf.slideOutLeft))),
      transition('* => rotateOutUpRight', animate(1000, keyframes(kf.rotateOutUpRight))),
      transition('* => flipOutY', animate(1000, keyframes(kf.flipOutY))),
    ])
  ]
  

})
export class HomePage {
  ready = false;
  attendants = [];
  cardDirection = "xy";
  cardOverlay: any = {
    like: {
      backgroundColor: '#28e93b'
    },
    dislike: {
      backgroundColor: '#e92828'
    }
  };
  images = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06"
  ]
  constructor() {
    for (let i = 0; i < this.images.length; i++) {
      this.attendants.push({
        id: i + 1,
        likeEvent: new EventEmitter(),
        destroyEvent: new EventEmitter(),
        asBg: this.images[i]
      });
    }
    this.ready = true;
  }
  onCardInteract(event) {
    console.log(event);
  }


  isFlip: string = 'goBack';
  toggleFlip() {
    console.log('clicked card!!')
    this.isFlip = (this.isFlip == 'goBack') ? 'goFlip' : 'goBack';
  }

 


}
