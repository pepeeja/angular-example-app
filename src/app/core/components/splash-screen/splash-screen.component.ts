import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'sw-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplashScreenComponent implements OnInit {
  @Input() duration = 3;

  private readonly showSubject = new BehaviorSubject(true);
  readonly show$ = this.showSubject.asObservable();

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.hide();
    }, this.duration * 1000);
  }

  private hide() {
    this.showSubject.next(false);
  }
}
