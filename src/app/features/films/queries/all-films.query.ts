import { Injectable } from '@angular/core';
import { Query, gql } from 'apollo-angular';
import { Film } from '../models/film.model';

export interface Response {
  allFilms: {
    films: Film[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class AllFilmsQuery extends Query<Response> {
  override document = gql`
    query AllFilms {
      allFilms {
        films {
          id
          title
          openingCrawl
          producers
          created
          releaseDate
        }
      }
    }
  `;
}
