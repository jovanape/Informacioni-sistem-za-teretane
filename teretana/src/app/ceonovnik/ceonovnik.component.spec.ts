import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeonovnikComponent } from './ceonovnik.component';

describe('CeonovnikComponent', () => {
  let component: CeonovnikComponent;
  let fixture: ComponentFixture<CeonovnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeonovnikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeonovnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
