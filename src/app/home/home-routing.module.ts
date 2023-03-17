import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from '../pages/characters/character/character.component';
import { CharactersComponent } from '../pages/characters/characters.component';
import { ComicComponent } from '../pages/comics/comic/comic.component';
import { ComicsComponent } from '../pages/comics/comics.component';

const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:id', component: CharacterComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'comics/:id', component: ComicComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
