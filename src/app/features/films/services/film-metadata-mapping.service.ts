import { Injectable } from '@angular/core';

interface Metadata {
  id: string;
  url: string;
  title: string;
  episode: number;
  trailerCode: string;
}

@Injectable()
export class FilmMetadataMappingService {
  private readonly metadata: Metadata[] = [
    {
      episode: 4,
      title: 'A New Hope',
      url: 'A-New-Hope',
      trailerCode: 'vZ734NWnAHA',
      id: 'ZmlsbXM6MQ==',
    },
    {
      episode: 5,
      title: 'The Empire Strikes Back',
      url: 'The-Empire-Strikes-Back',
      trailerCode: 'JNwNXF9Y6kY',
      id: 'ZmlsbXM6Mg==',
    },
  ];

  public getAllMetadata() {
    return this.metadata;
  }

  public getById(id: string) {
    return this.metadata.find((meta) => meta.id === id);
  }

  public getByEpisode(episode: number) {
    return this.metadata.find((meta) => meta.episode === episode);
  }

  public getByUrl(url: string) {
    return this.metadata.find((meta) => meta.url === url);
  }
}
