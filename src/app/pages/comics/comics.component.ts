import { Component, OnInit } from '@angular/core';
import { ComicsService } from 'src/app/shared/services/comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss'],
})
export class ComicsComponent implements OnInit {
  comics!: any;

  constructor(private comicSvc: ComicsService) {}

  async ngOnInit() {
    const response = await this.comicSvc.getComics();
    const data = await response.json();
    console.log(data);

    this.comics = data.data.results.filter(
      (x: any) =>
        x.thumbnail.path !=
        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
    );
    console.log(this.comics);
  }
}
