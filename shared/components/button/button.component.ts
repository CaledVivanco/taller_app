import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <ion-button expand="block" [color]="color" (click)="onClick()">
      {{ label }}
    </ion-button>
  `
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() color: string = 'primary';

  onClick() {
    console.log(`${this.label} clicked`);
  }
}
