import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupovinaPaketaComponent } from './kupovina_paketa.component';

describe('KupovinaPaketaComponent', () => {
  let component: KupovinaPaketaComponent;
  let fixture: ComponentFixture<KupovinaPaketaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KupovinaPaketaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KupovinaPaketaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
