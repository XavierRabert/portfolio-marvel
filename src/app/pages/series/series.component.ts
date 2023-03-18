import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/shared/services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent implements OnInit {
  series!: any;
  constructor(private seriesSvc: SeriesService) {}

  async ngOnInit() {
    const response = await this.seriesSvc.getSeries();
    const data = await response.json();
    console.log('data', data);

    this.series = data.data.results.filter(
      (x: any) =>
        x.thumbnail.path !=
        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
    );
    console.log('results', this.series);
  }
}
