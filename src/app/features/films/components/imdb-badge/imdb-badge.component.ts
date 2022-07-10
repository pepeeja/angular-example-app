import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'sw-imdb-badge',
  templateUrl: './imdb-badge.component.html',
  styleUrls: ['./imdb-badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IMDbBadgeComponent {
  @Input() rating = 0;

  constructor() {}
}
