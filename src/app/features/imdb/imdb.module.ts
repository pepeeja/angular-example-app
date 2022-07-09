import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '@shared';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  providers: [],
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule, SharedModule],
  exports: [],
})
export class IMDbModule {}
