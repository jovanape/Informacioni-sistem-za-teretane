import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtkazivanjeTakmicenjaComponent } from './otkazivanje-takmicenja.component';

describe('OtkazivanjeTakmicenjaComponent', () => {
  let component: OtkazivanjeTakmicenjaComponent;
  let fixture: ComponentFixture<OtkazivanjeTakmicenjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtkazivanjeTakmicenjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtkazivanjeTakmicenjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
