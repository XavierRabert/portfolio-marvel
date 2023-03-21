import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreatorsService } from 'src/app/shared/services/creators.service';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss'],
})
export class CreatorComponent implements OnInit {
  creatorID!: any;
  data!: any;
  dataCreator!: any;
  constructor(
    private route: ActivatedRoute,
    private creatorSvs: CreatorsService
  ) {}

  async ngOnInit(): Promise<void> {
    this.creatorID = this.route.snapshot.paramMap.get('id');
    this.getDetails();
  }

  async getDetails() {
    const response = await this.creatorSvs.getCreatorDetails(this.creatorID);
    const data = await response.json();
    this.data = data;
    this.dataCreator = data.data.results[0];
    console.log(this.data);
  }
}
