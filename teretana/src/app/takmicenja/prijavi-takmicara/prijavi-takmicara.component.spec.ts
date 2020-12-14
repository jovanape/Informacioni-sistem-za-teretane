import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrijaviTakmicaraComponent } from './prijavi-takmicara.component';

describe('PrijaviTakmicaraComponent', () => {
  let component: PrijaviTakmicaraComponent;
  let fixture: ComponentFixture<PrijaviTakmicaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrijaviTakmicaraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrijaviTakmicaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
