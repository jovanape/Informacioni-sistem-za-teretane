import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaketPS30TerminaComponent } from './paket_PS_30_termina.component';

describe('PaketPS30TerminaComponent', () => {
  let component: PaketPS30TerminaComponent;
  let fixture: ComponentFixture<PaketPS30TerminaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaketPS30TerminaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaketPS30TerminaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
