import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreneriComponent } from './treneri.component';

describe('TreneriComponent', () => {
  let component: TreneriComponent;
  let fixture: ComponentFixture<TreneriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreneriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreneriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
