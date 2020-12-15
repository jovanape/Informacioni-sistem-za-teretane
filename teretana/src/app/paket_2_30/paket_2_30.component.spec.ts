import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paket230Component } from './paket_2_30.component';

describe('Paket2Component', () => {
  let component: Paket230Component;
  let fixture: ComponentFixture<Paket230Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Paket230Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Paket230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
