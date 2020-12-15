import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paket3Component } from './paket_3.component';

describe('Paket3Component', () => {
  let component: Paket3Component;
  let fixture: ComponentFixture<Paket3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Paket3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Paket3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
