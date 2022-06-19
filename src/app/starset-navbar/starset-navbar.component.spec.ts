import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsetNavbarComponent } from './starset-navbar.component';

describe('StarsetNavbarComponent', () => {
  let component: StarsetNavbarComponent;
  let fixture: ComponentFixture<StarsetNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarsetNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarsetNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
