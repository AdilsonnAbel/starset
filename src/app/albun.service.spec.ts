import { TestBed } from '@angular/core/testing';

import { AlbunService } from './albun.service';

describe('AlbunService', () => {
  let service: AlbunService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbunService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
