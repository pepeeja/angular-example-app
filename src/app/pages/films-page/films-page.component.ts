import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './films-page.component.html',
  styleUrls: ['./films-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmsPageComponent {
  constructor() {}
}
