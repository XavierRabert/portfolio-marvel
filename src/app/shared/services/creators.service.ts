import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CreatorsService {
  private apiURL = 'https://gateway.marvel.com:443/v1/';
  private userParams =
    '?limit=100&apikey=fabb6414db4eabbe1ccf8eeed6560c38&ts=1&hash=289116acea265bb743726b5514d589e3';

  constructor() {}

  getCreators() {
    return fetch(`${this.apiURL}public/creators${this.userParams}`);
  }

  getCreatorDetails(id: string) {
    return fetch(`${this.apiURL}public/creators/${id}${this.userParams}`);
  }
}
