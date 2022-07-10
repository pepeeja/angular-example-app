import { Component, ChangeDetectionStrategy, Inject, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogData } from '@features/dialog/model/confirm-dialog-data.model';

@Component({
  selector: 'sw-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: ConfirmDialogData,
    private mdDialogRef: MatDialogRef<ConfirmDialogComponent>,
  ) {}

  public cancel() {
    this.close(false);
  }

  public close(value: any) {
    this.mdDialogRef.close(value);
  }

  public confirm() {
    this.close(true);
  }

  @HostListener('keydown.esc')
  public onEsc() {
    this.close(false);
  }
}
