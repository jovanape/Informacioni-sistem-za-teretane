import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaketPS12TerminaComponent } from './paket_PS_12_termina.component';

describe('PaketPS12TerminaComponent', () => {
  let component: PaketPS12TerminaComponent;
  let fixture: ComponentFixture<PaketPS12TerminaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaketPS12TerminaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaketPS12TerminaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
