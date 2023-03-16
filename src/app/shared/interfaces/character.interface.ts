export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  events: Events;
  urls: [Urls];
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Comics {
  available: number;
  collectionUri: string;
  items: [Items];
  returned: number;
}

export interface Series {
  available: number;
  collectionURI: string;
  items: [Items];
  returned: number;
}

export interface Events {
  available: string;
  collectionURI: string;
  items: [Items];
  returned: number;
}

export interface Items {
  resourceURI: string;
  name: string;
}

export interface Stories {
  available: number;
  collectionUri: string;
  items: [itemStory];
  returned: number;
}

export interface itemStory {
  resourceURI: string;
  name: string;
  type: string;
}

export interface Urls {
  type: string;
  url: string;
}
