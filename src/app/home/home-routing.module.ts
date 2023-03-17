import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from '../pages/characters/character/character.component';
import { CharactersComponent } from '../pages/characters/characters.component';

const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:id', component: CharacterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
