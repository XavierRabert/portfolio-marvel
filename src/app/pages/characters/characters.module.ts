import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { CharacterComponent } from './character/character.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CharactersComponent, CharacterComponent],
  imports: [CommonModule, CharactersRoutingModule, RouterModule],
})
export class CharactersModule {}
