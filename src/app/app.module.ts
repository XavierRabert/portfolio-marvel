import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './pages/series/series.component';
import { SerieComponent } from './pages/series/serie/serie.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { StoryComponent } from './pages/stories/story/story.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterComponent } from './pages/characters/character/character.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { ComicComponent } from './pages/comics/comic/comic.component';
import { InitialComponent } from './home/initial/initial.component';
import { FormsModule } from '@angular/forms';
import { CreatorsComponent } from './pages/creators/creators/creators.component';
import { CreatorComponent } from './pages/creators/creator/creator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SeriesComponent,
    SerieComponent,
    StoriesComponent,
    StoryComponent,
    NoPageFoundComponent,
    CharactersComponent,
    CharacterComponent,
    ComicsComponent,
    ComicComponent,
    InitialComponent,
    CreatorsComponent,
    CreatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
