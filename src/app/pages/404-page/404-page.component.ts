import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './404-page.component.html',
  styleUrls: ['./404-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPageComponent {
  constructor() {}
}
