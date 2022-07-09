import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '@shared';
import { FilmsListComponent } from './components/film-list/film-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FilmMetadataMappingService } from './services/film-metadata-mapping.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FilmsListComponent],
  providers: [FilmMetadataMappingService],
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule, RouterModule, SharedModule],
  exports: [FilmsListComponent],
})
export class FilmsModule {}
