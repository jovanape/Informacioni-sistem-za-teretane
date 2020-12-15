import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paket130Component } from './paket_1_30.component';

describe('Paket130Component', () => {
  let component: Paket130Component;
  let fixture: ComponentFixture<Paket130Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Paket130Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Paket130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
