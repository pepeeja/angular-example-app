import { Component, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'sw-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YoutubePlayerComponent implements OnChanges {
  @Input() code: string = '';

  private readonly videoUrlSubject = new BehaviorSubject('');
  public readonly videoUrl$ = this.videoUrlSubject.asObservable();

  constructor() {}

  ngOnChanges(): void {
    if (this.code) {
      this.videoUrlSubject.next(`https://www.youtube.com/embed/${this.code}?autoplay=1`);
    }
  }
}
