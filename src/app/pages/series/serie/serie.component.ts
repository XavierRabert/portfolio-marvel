import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from 'src/app/shared/services/series.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss'],
})
export class SerieComponent implements OnInit {
  serieID!: any;
  data!: any;
  dataSerie!: any;
  constructor(private route: ActivatedRoute, private serieSvs: SeriesService) {}

  async ngOnInit(): Promise<void> {
    this.serieID = this.route.snapshot.paramMap.get('id');
    this.getDetails();
  }

  async getDetails() {
    const response = await this.serieSvs.getSerieDetails(this.serieID);
    const data = await response.json();
    this.data = data;
    this.dataSerie = data.data.results[0];
    console.log(this.data);
  }
}
