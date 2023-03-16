import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/interfaces/character.interface';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters!: any;
  //characters: Character[] = [];

  constructor(private characterSvc: CharactersService) {}

  async ngOnInit() {
    const response = await this.characterSvc.getCharacters();
    const data = await response.json();
    console.log(data);

    this.characters = data.data.results.filter(
      (x: any) =>
        x.thumbnail.path !=
        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
    );
    console.log(this.characters);
  }
}
