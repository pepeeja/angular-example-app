import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialogComponent, VideoDialogComponent } from '../components';
import { ConfirmDialogData } from '../model/confirm-dialog-data.model';
import { VideoDialogData } from '../model/video-dialog-data.model';

type DialogType = 'confirm' | 'video';
type DialogDataMapping = {
  confirm: ConfirmDialogData;
  video: VideoDialogData;
};

@Injectable({ providedIn: 'root' })
export class DialogService {
  constructor(private readonly dialog: MatDialog) {}

  public open(type: DialogType, options: MatDialogConfig<DialogDataMapping[DialogType]>) {
    switch (type) {
      case 'video':
        return this.dialog.open(VideoDialogComponent, {
          ...options,
          maxWidth: '100vw',
          maxHeight: '100vh',
          height: '100%',
          width: '100%',
          panelClass: 'dark-dialog-container',
        });
      case 'confirm':
        return this.dialog.open(ConfirmDialogComponent, options);
      default:
        throw new Error('Unsupported dialog type');
    }
  }
}
