import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  private apiURL = 'https://gateway.marvel.com:443/v1/';
  private userParams =
    '?limit=100&apikey=fabb6414db4eabbe1ccf8eeed6560c38&ts=1&hash=289116acea265bb743726b5514d589e3';

  constructor() {}

  getStories() {
    return fetch(`${this.apiURL}public/stories${this.userParams}`);
  }

  getStoryDetails(id: string) {
    return fetch(`${this.apiURL}public/stories/${id}${this.userParams}`);
  }
}
