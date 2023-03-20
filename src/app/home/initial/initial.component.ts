import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss'],
})
export class InitialComponent implements OnInit {
  wordSearch!: string;
  characters!: void;
  comics!: void;
  constructor(private searchSvc: SearchService) {}

  ngOnInit() {}

  async searchResults() {
    const responseChar = await this.searchSvc.getCharactersSearch(
      this.wordSearch
    );
    const dataChar = await responseChar.json();
    console.log(dataChar);
    this.characters = dataChar.data.results.filter(
      (x: any) =>
        x.thumbnail.path !=
        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
    );

    const responseComics = await this.searchSvc.getComicsSearch(
      this.wordSearch
    );
    const dataComics = await responseComics.json();
    console.log(dataComics);
    this.comics = dataComics.data.results.filter(
      (x: any) =>
        x.thumbnail.path !=
        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
    );
  }
}
