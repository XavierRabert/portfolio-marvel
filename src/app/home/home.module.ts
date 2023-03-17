import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CharactersComponent } from '../pages/characters/characters.component';
import { CharacterComponent } from '../pages/characters/character/character.component';
import { ComicsComponent } from '../pages/comics/comics.component';
import { ComicComponent } from '../pages/comics/comic/comic.component';

@NgModule({
  declarations: [
    CharactersComponent,
    CharacterComponent,
    ComicsComponent,
    ComicComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
