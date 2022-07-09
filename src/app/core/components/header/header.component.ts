import { Component, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'sw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly stickySubject = new BehaviorSubject(false);
  readonly sticky$ = this.stickySubject.asObservable();

  constructor() {}

  @HostListener('window:scroll', ['$event'])
  private checkScroll() {
    this.setSticky(window.pageYOffset >= 250);
  }

  private setSticky(value: boolean) {
    this.stickySubject.next(value);
  }
}
