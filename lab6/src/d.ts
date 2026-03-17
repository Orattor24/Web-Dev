
import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<button (click)="SendMessage()">send message</button>'
})
export class ChildComponent{
  @Output() notifyParent = new EventEmitter<string>();

  SendMessage(){
    this.notifyParent.emit('hello ')
  }
}

