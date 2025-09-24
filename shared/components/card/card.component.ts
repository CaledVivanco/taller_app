import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonCardSubtitle, IonCard } from "@ionic/angular/standalone";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() image: string = '';
  @Input() isFavorite: boolean = false;

  @Output() favoriteToggle = new EventEmitter<void>();
  @Output() clickAction = new EventEmitter<void>();

  onFavorite() {
    this.favoriteToggle.emit();
  }

  onClick() {
    this.clickAction.emit();
  }
}
