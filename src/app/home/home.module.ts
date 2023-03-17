import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CharactersComponent } from '../pages/characters/characters.component';
import { CharacterComponent } from '../pages/characters/character/character.component';

@NgModule({
  declarations: [CharactersComponent, CharacterComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
