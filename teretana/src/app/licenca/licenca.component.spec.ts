import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicencaComponent } from './licenca.component';

describe('LicencaComponent', () => {
  let component: LicencaComponent;
  let fixture: ComponentFixture<LicencaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicencaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicencaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
