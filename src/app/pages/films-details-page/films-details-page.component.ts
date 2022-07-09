import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from '@features/dialog/services/dialog.service';
import { FilmMetadataMappingService } from '@features/films/services/film-metadata-mapping.service';

@Component({
  templateUrl: './films-details-page.component.html',
  styleUrls: ['./films-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmsDetailsPageComponent {
  public readonly metadata;
  public readonly backgroundImage;

  constructor(
    private readonly dialogService: DialogService,
    private readonly filmMetadataMappingService: FilmMetadataMappingService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
  ) {
    this.metadata = this.filmMetadataMappingService.getByUrl(this.activatedRoute.snapshot.params['title'])!;
    if (!this.metadata) {
      this.router.navigate(['404']);
    }

    this.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(assets/img/wallpapers/${this.metadata.id}.jpg)`;
  }

  public watchTrailer() {
    this.dialogService.open('video', { data: { videoCode: this.metadata.trailerCode } });
  }
}
