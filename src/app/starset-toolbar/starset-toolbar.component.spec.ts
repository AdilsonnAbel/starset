import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsetToolbarComponent } from './starset-toolbar.component';

describe('StarsetToolbarComponent', () => {
  let component: StarsetToolbarComponent;
  let fixture: ComponentFixture<StarsetToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarsetToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StarsetToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
