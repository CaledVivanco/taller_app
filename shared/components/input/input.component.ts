import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <ion-item>
      <ion-input
        [type]="type"
        [placeholder]="placeholder"
        [(ngModel)]="value"
        (ionChange)="onChange($event)">
      </ion-input>
    </ion-item>
  `
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() value: any = '';
  @Output() valueChange = new EventEmitter<any>();

  onChange(event: any) {
    this.valueChange.emit(event.detail.value);
  }
}
