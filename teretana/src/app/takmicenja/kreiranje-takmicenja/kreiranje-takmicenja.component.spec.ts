import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KreiranjeTakmicenjaComponent } from './kreiranje-takmicenja.component';

describe('KreiranjeTakmicenjaComponent', () => {
  let component: KreiranjeTakmicenjaComponent;
  let fixture: ComponentFixture<KreiranjeTakmicenjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KreiranjeTakmicenjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KreiranjeTakmicenjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
