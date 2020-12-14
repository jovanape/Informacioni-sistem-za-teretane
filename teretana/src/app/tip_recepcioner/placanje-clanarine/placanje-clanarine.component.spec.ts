import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacanjeClanarineComponent } from './placanje-clanarine.component';

describe('PlacanjeClanarineComponent', () => {
  let component: PlacanjeClanarineComponent;
  let fixture: ComponentFixture<PlacanjeClanarineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacanjeClanarineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacanjeClanarineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
