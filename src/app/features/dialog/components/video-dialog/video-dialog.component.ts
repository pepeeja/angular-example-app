import { Component, ChangeDetectionStrategy, Inject, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VideoDialogData } from '@features/dialog/model/video-dialog-data.model';

@Component({
  selector: 'sw-video-dialog',
  templateUrl: './video-dialog.component.html',
  styleUrls: ['./video-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: VideoDialogData,
    private mdDialogRef: MatDialogRef<VideoDialogComponent>,
  ) {}

  public close() {
    this.mdDialogRef.close();
  }

  @HostListener('keydown.esc')
  public onEsc() {
    this.close();
  }
}
