import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramiComponent } from './programi.component';

describe('ProgramiComponent', () => {
  let component: ProgramiComponent;
  let fixture: ComponentFixture<ProgramiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
