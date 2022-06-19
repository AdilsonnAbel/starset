import { Injectable } from '@angular/core';

import { Albun } from './albun';
import { DISCOGRAPHY } from './mock-albuns';

@Injectable({
  providedIn: 'root',
})
export class AlbunService {
  constructor() {}

  getDiscography(): Albun[] {
    return DISCOGRAPHY;
  }
}
