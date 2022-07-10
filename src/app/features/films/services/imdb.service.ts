import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { IMDbFilm } from '../models/imdb-film.model';

@Injectable()
export class IMDbService {
  constructor(private http: HttpClient) {}

  // IMDb does not have public API so using mocked data
  public getMock() {
    return this.http.get<IMDbFilm[]>(`./assets/json/imdb-mock.json`).pipe(shareReplay(1));
  }

  public getFilm(id: string) {
    return this.getMock().pipe(map((films) => films.find((film) => film.id === id)));
  }
}
