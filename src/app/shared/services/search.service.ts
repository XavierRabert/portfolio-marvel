import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private apiURL = 'https://gateway.marvel.com:443/v1/';
  private userParams =
    '&limit=100&apikey=fabb6414db4eabbe1ccf8eeed6560c38&ts=1&hash=289116acea265bb743726b5514d589e3';

  constructor() {}

  getComicsSearch(comicSearch: string) {
    return fetch(
      `${this.apiURL}public/comics?titleStartsWith=${comicSearch}${this.userParams}`
    );
  }

  getCharactersSearch(characterSearch: string) {
    return fetch(
      `${this.apiURL}public/characters?nameStartsWith=${characterSearch}${this.userParams}`
    );
  }
}
