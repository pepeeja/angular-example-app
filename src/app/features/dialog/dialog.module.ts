import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmDialogComponent, VideoDialogComponent } from './components';
import { DialogService } from './services/dialog.service';

@NgModule({
  declarations: [ConfirmDialogComponent, VideoDialogComponent],
  providers: [DialogService],
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule, SharedModule],
  exports: [],
})
export class DialogModule {}
