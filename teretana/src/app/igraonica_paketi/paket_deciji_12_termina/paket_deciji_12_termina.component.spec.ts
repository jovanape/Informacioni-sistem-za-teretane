import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaketDeciji12TerminaComponent } from './paket_deciji_12_termina.component';

describe('PaketDeciji12TerminaComponent', () => {
  let component: PaketDeciji12TerminaComponent;
  let fixture: ComponentFixture<PaketDeciji12TerminaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaketDeciji12TerminaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaketDeciji12TerminaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
