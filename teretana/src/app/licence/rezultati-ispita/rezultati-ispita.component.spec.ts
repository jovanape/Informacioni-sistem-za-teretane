import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezultatiIspitaComponent } from './rezultati-ispita.component';

describe('RezultatiIspitaComponent', () => {
  let component: RezultatiIspitaComponent;
  let fixture: ComponentFixture<RezultatiIspitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezultatiIspitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RezultatiIspitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
