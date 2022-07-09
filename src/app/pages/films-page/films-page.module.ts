import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FilmsPageComponent } from './films-page.component';
import { FilmsModule } from '@features/films/films.module';

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
