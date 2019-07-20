import { Component } from '@angular/core';
// addEventListener
@Component({
  selector: 'app-root',
  template: `
    <h2
      [class.with-border]="withBorder"
      (mouseover)="onTextMouseOver()"
      (mouseout)="onTextMouseOut()"
      [style.color]="textColor"
    >{{title}}
    </h2>
    <button (click)="onButtonClick($event)">{{withBorder ? "Hide" : "Show"}} border</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coders Tokyo Update'; // public
  imageUrl = 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  textColor = 'tomato';
  withBorder = true;

  onButtonClick(event: MouseEvent){
    console.log('button click !!!');
    this.withBorder = !this.withBorder;
  }
  onTextMouseOver(){
    this.textColor = 'dodgerblue';
  }
  onTextMouseOut(){
    this.textColor = 'yellow';
  }
}

// Data binding

//// 1. Property binding
// 2. Event binding

