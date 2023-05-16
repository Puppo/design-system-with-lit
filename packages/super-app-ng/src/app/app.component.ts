import { Component } from '@angular/core';

@Component({
  selector: 'ds-root',
  template: `<div>
    <h1>Hello, to my cool design system!</h1>

    <ds-button
      type="button"
      size="pluto"
      variant="primary"
      (click)="handleClick()"
      (customover)="handleHover()"
      >Click me</ds-button
    >
  </div>`,
  styles: [''],
})
export class AppComponent {
  handleClick() {
    alert('Hey, I clicked my button!');
  }

  handleHover() {
    console.log('Hey, hover of my button!');
  }
}
