import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmenaTakmicenjaComponent } from './izmena-takmicenja.component';

describe('IzmenaTakmicenjaComponent', () => {
  let component: IzmenaTakmicenjaComponent;
  let fixture: ComponentFixture<IzmenaTakmicenjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzmenaTakmicenjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IzmenaTakmicenjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
