import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaStatusComponent } from './mesa-status.component';

describe('MesaStatusComponent', () => {
  let component: MesaStatusComponent;
  let fixture: ComponentFixture<MesaStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesaStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
