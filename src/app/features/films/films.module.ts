import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '@shared';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { FilmsListComponent, IMDbBadgeComponent, MetascoreBadgeComponent } from './components';
import { FilmMetadataMappingService, IMDbService } from './services';

@NgModule({
  declarations: [FilmsListComponent, IMDbBadgeComponent, MetascoreBadgeComponent],
  providers: [FilmMetadataMappingService, IMDbService],
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule, MatTooltipModule, RouterModule, SharedModule],
  exports: [FilmsListComponent],
})
export class FilmsModule {}
