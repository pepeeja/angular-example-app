import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMDbFilmData } from '../model/imdb-film.model';

// http://www.omdbapi.com/
@Injectable()
export class IMDbFilmService {
  constructor(private http: HttpClient) {}

  public getEpisode(episode: number) {
    return this.http.get<IMDbFilmData>(`./assets/json/imdb/episode-${episode}.json`);
  }
}
