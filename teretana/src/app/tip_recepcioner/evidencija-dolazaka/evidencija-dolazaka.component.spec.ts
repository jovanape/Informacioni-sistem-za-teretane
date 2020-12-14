import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidencijaDolazakaComponent } from './evidencija-dolazaka.component';

describe('EvidencijaDolazakaComponent', () => {
  let component: EvidencijaDolazakaComponent;
  let fixture: ComponentFixture<EvidencijaDolazakaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvidencijaDolazakaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidencijaDolazakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
