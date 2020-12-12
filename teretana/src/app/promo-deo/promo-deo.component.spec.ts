import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoDeoComponent } from './promo-deo.component';

describe('PromoDeoComponent', () => {
  let component: PromoDeoComponent;
  let fixture: ComponentFixture<PromoDeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoDeoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoDeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
