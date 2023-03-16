import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  charID!: any;
  constructor(
    private route: ActivatedRoute,
    private charactersSvs: CharactersService
  ) {}

  ngOnInit(): void {
    this.charID = this.route.snapshot.paramMap.get('id');
    this.getDetails(this.charID);
  }

  async getDetails(id: string) {
    const response = await this.charactersSvs.getCharDetails(id);
    const data = await response.json();
    console.log(data);
  }
}
