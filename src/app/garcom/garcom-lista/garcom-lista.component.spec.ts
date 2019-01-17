import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarcomListaComponent } from './garcom-lista.component';

describe('GarcomListaComponent', () => {
  let component: GarcomListaComponent;
  let fixture: ComponentFixture<GarcomListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarcomListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarcomListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
