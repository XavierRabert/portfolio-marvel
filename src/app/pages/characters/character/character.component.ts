import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  charID!: any;
  data!: any;
  dataCharacter!: any;
  constructor(
    private route: ActivatedRoute,
    private charactersSvs: CharactersService
  ) {}

  async ngOnInit(): Promise<void> {
    this.charID = this.route.snapshot.paramMap.get('id');
    this.getDetails();
  }

  async getDetails() {
    const response = await this.charactersSvs.getCharDetails(this.charID);
    const data = await response.json();
    this.data = data;
    this.dataCharacter = data.data.results[0];
    console.log(this.data);
  }
}
