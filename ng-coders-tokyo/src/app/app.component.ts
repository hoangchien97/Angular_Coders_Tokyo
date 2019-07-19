import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // document.querySelector('app-root'); <=> <app-root></app-root>
  // document.querySelector('.app-root'); <=> <div class="app-root"></divs>
  templateUrl: './app.component.html',
  // C1 : đường link
  // C2 : // `<h1>test</h1>`
  styleUrls: ['./app.component.css']
  // tương tự teamplate . CSS
})
export class AppComponent {
  title = 'Hello World';
}
