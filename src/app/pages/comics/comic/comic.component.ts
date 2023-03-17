import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicsService } from 'src/app/shared/services/comics.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss'],
})
export class ComicComponent implements OnInit {
  comicID!: any;
  data!: any;
  dataComic!: any;
  constructor(private route: ActivatedRoute, private comicSvs: ComicsService) {}

  async ngOnInit(): Promise<void> {
    this.comicID = this.route.snapshot.paramMap.get('id');
    this.getDetails();
  }

  async getDetails() {
    const response = await this.comicSvs.getComicDetails(this.comicID);
    const data = await response.json();
    this.data = data;
    this.dataComic = data.data.results[0];
    console.log(this.data);
  }
}
