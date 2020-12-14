import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paket330Component } from './paket_3_30.component';

describe('Paket330Component', () => {
  let component: Paket330Component;
  let fixture: ComponentFixture<Paket330Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Paket330Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Paket330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
