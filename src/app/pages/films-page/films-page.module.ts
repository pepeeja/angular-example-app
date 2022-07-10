import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FilmsModule } from '@features/films/films.module';
import { FilmsPageComponent } from './films-page.component';

@NgModule({
  declarations: [FilmsPageComponent],
  imports: [
    CommonModule,
    FilmsModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: FilmsPageComponent,
      },
    ]),
  ],
})
export class FilmsPageModule {}
