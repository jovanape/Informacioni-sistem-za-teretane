import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupovinaPaketaIgraoniceComponent } from './kupovina_paketa_igraonice.component';

describe('KupovinaPaketaIgraoniceComponent', () => {
  let component: KupovinaPaketaIgraoniceComponent;
  let fixture: ComponentFixture<KupovinaPaketaIgraoniceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KupovinaPaketaIgraoniceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KupovinaPaketaIgraoniceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
