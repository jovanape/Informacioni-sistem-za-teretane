import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipacijaTakmicenjeComponent } from './participacija-takmicenje.component';

describe('ParticipacijaTakmicenjeComponent', () => {
  let component: ParticipacijaTakmicenjeComponent;
  let fixture: ComponentFixture<ParticipacijaTakmicenjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipacijaTakmicenjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipacijaTakmicenjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
