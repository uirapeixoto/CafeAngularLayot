import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaAbertasComponent } from './mesa-abertas.component';

describe('MesaAbertasComponent', () => {
  let component: MesaAbertasComponent;
  let fixture: ComponentFixture<MesaAbertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesaAbertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaAbertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
