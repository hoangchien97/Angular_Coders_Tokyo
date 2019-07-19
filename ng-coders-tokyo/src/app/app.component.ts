import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // document.querySelector('app-root'); <=> <app-root></app-root>
  // document.querySelector('.app-root'); <=> <div class="app-root"></div>
  template: `
    <h1>Welcome to Coders.Tokyo</h1>
    <app-hello></app-hello>
    <app-hi></app-hi>
  `,
  styleUrls: ['./app.component.css']
  // tương tự teamplate . CSS
})
export class AppComponent {
  title = 'Hello World';
}
