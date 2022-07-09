import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sw-films-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmsCardComponent {
  constructor() {}
}
