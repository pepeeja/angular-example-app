import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FilmMetadataMappingService } from '@features/films/services/film-metadata-mapping.service';
import { films } from './film-list.data';

@Component({
  selector: 'sw-films-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmsListComponent {
  readonly filmList = films;

  constructor(public readonly filmMetadataMappingService: FilmMetadataMappingService) {}
}
