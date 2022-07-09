import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { DialogService } from './services/dialog.service';
import { ConfirmDialogComponent, VideoDialogComponent } from './components';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

/**
 * @todo Decide if should be moved to SharedModule
 */
@NgModule({
  declarations: [ConfirmDialogComponent, VideoDialogComponent],
  providers: [DialogService],
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule, SharedModule],
  exports: [],
})
export class DialogModule {}
