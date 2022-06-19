import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsetContentComponent } from './starset-content.component';

describe('StarsetContentComponent', () => {
  let component: StarsetContentComponent;
  let fixture: ComponentFixture<StarsetContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarsetContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarsetContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
