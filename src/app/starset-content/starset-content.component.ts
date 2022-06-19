import { Component, OnInit, Input } from '@angular/core';

import { Albun } from '../albun';
import { AlbunService } from '../albun.service';

@Component({
  selector: 'app-starset-content',
  templateUrl: './starset-content.component.html',
  styleUrls: ['./starset-content.component.scss'],
})
export class StarsetContentComponent implements OnInit {
  @Input() albun?: Albun;

  constructor(private albunService: AlbunService) {}

  ngOnInit(): void {}
}
