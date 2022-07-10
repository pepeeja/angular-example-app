import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'sw-metascore-badge',
  templateUrl: './metascore-badge.component.html',
  styleUrls: ['./metascore-badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MetascoreBadgeComponent {
  @Input() metascore = 0;

  constructor() {}
}
