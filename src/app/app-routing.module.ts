import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InitialComponent } from './home/initial/initial.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { CharacterComponent } from './pages/characters/character/character.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { ComicComponent } from './pages/comics/comic/comic.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { SerieComponent } from './pages/series/serie/serie.component';
import { SeriesComponent } from './pages/series/series.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { StoryComponent } from './pages/stories/story/story.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent,
  //   loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  // },
  { path: '', component: InitialComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:id', component: CharacterComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'comics/:id', component: ComicComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'series/:id', component: SerieComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'stories/:id', component: StoryComponent },

  // { path: '**', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: NoPageFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
