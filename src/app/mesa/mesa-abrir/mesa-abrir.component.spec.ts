import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaAbrirComponent } from './mesa-abrir.component';

describe('MesaAbrirComponent', () => {
  let component: MesaAbrirComponent;
  let fixture: ComponentFixture<MesaAbrirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesaAbrirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaAbrirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
