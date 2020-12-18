import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaPlacanjeComponent } from './forma_za_placanje.component';

describe('FormaPlacanjeComponent', () => {
  let component: FormaPlacanjeComponent;
  let fixture: ComponentFixture<FormaPlacanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormaPlacanjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaPlacanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
