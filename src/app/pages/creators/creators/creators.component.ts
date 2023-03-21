import { Component, OnInit } from '@angular/core';
import { CreatorsService } from 'src/app/shared/services/creators.service';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss'],
})
export class CreatorsComponent implements OnInit {
  creators!: any;

  constructor(private creatorsSvc: CreatorsService) {}

  async ngOnInit() {
    const response = await this.creatorsSvc.getCreators();
    const data = await response.json();
    console.log(data);

    this.creators = data.data.results.filter(
      (x: any) =>
        x.thumbnail.path !=
        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
    );
    console.log(this.creators);
  }
}
