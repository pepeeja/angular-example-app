import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FilmsDetailsPageComponent } from './films-details-page.component';
import { FilmsModule } from '@features/films/films.module';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '@shared';
import { DialogModule } from '@features/dialog/dialog.module';

// https://dribbble.com/shots/15201588-The-Mandalorian-Web-Header
@NgModule({
  declarations: [FilmsDetailsPageComponent],
  imports: [
    CommonModule,
    DialogModule,
    FilmsModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: FilmsDetailsPageComponent,
      },
    ]),
    SharedModule,
  ],
})
export class FilmsDetailsPageModule {}
