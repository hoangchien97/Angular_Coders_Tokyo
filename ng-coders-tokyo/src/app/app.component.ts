import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 [ngStyle] = "styleObj">Welcome to {{ title }}</h1>
    <h2 [class.with-border]="withBorder">Class binding</h2>
    <h1 [textContent]="title"></h1>
    <img src="{{imageUrl}}"/>
    <img [src]="imageUrl" />
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coders Tokyo Update'; // public
  imageUrl = 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  textColor = 'tomato';
  backgroundColor = 'yellow';
  styleObj = {color: this.textColor, background: this.backgroundColor };
  withBorder = true;
}

// Data binding

// 1. Property binding
// 2. Event binding


// Access modifier
// public, private, ...

// <img [src]="imageUrl"/> // Squarebrakets

// [class] [att.id] // document.getElementById(...).attribute

// [style.color] = "textColor" [style.background] = "backgroundColor"
// <=> [ngStyle] = "{color:textColor,background: backgroundColor}"

