export interface IMDbFilm {
  // Using film id from GraphQL to simplify mapping
  id: string;
  title: string;
  runtime: string;
  genre: string;
  plot: string;
  awards: string;
  metascore?: number;
  imdbRating?: number;
  dvd: string;
  boxOffice: string;
}
