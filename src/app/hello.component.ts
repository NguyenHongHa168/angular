
import { Component } from "@angular/core";
@Component({
    selector:'app-hello',
    template:`
    <p>Hello there </p>
    <button (click)="showInfo()">Click me</button>
    `,
})

export class HelloComponent{
  user={
    name:'Nguyen Hong ha',
    age:'21'
  };
  showInfo(){
    alert('Nguyen Hong Ha !!!')
  }
}

