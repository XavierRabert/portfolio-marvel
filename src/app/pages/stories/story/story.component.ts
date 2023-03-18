import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoriesService } from 'src/app/shared/services/stories.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent implements OnInit {
  storyID!: any;
  data!: any;
  dataSerie!: any;
  constructor(
    private route: ActivatedRoute,
    private storySvs: StoriesService
  ) {}

  async ngOnInit(): Promise<void> {
    this.storyID = this.route.snapshot.paramMap.get('id');
    this.getDetails();
  }

  async getDetails() {
    const response = await this.storySvs.getStoryDetails(this.storyID);
    const data = await response.json();
    this.data = data;
    this.dataSerie = data.data.results[0];
    console.log(this.data);
  }
}
