import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paket2Component } from './paket_2.component';

describe('Paket2Component', () => {
  let component: Paket2Component;
  let fixture: ComponentFixture<Paket2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Paket2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Paket2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
