import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaketDeciji30TerminaComponent } from './paket_deciji_30_termina.component';

describe('PaketDeciji30TerminaComponent', () => {
  let component: PaketDeciji30TerminaComponent;
  let fixture: ComponentFixture<PaketDeciji30TerminaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaketDeciji30TerminaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaketDeciji30TerminaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
