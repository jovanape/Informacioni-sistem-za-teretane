import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgraonicaPonudeComponent } from './igraonica_ponude.component';

describe('IgraonicaPonudeComponent', () => {
  let component: IgraonicaPonudeComponent;
  let fixture: ComponentFixture<IgraonicaPonudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgraonicaPonudeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgraonicaPonudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
