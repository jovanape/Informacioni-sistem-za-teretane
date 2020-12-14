import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paket1Component } from './paket_1.component';

describe('Paket1Component', () => {
  let component: Paket1Component;
  let fixture: ComponentFixture<Paket1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Paket1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Paket1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
