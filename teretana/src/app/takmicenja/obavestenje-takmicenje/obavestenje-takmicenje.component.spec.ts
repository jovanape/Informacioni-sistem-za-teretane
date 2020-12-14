import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObavestenjeTakmicenjeComponent } from './obavestenje-takmicenje.component';

describe('ObavestenjeTakmicenjeComponent', () => {
  let component: ObavestenjeTakmicenjeComponent;
  let fixture: ComponentFixture<ObavestenjeTakmicenjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObavestenjeTakmicenjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObavestenjeTakmicenjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
