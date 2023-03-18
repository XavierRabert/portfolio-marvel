import { Component, OnInit } from '@angular/core';
import { StoriesService } from 'src/app/shared/services/stories.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {
  stories!: any;
  constructor(private storiesSvc: StoriesService) {}

  async ngOnInit() {
    const response = await this.storiesSvc.getStories();
    const data = await response.json();
    console.log('data', data);

    this.stories = data.data.results;
    console.log('results', this.stories);
  }
}
