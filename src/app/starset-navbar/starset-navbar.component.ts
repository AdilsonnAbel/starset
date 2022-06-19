import { Component, OnInit } from '@angular/core';

import { Albun } from '../albun';
import { AlbunService } from '../albun.service';

@Component({
  selector: 'app-starset-navbar',
  templateUrl: './starset-navbar.component.html',
  styleUrls: ['./starset-navbar.component.scss'],
})
export class StarsetNavbarComponent implements OnInit {
  selectAlbun?: Albun;

  discography: Albun[] = [];

  constructor(private albunService: AlbunService) {}

  ngOnInit(): void {
    this.getDiscography();
  }

  onSelect(albun: Albun): void {
    this.selectAlbun = albun;
  }

  getDiscography(): void {
    this.discography = this.albunService.getDiscography();
  }
}
