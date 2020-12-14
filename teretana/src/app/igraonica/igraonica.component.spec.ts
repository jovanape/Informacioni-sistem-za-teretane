import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgraonicaComponent } from './igraonica.component';

describe('IgraonicaComponent', () => {
  let component: IgraonicaComponent;
  let fixture: ComponentFixture<IgraonicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgraonicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgraonicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
