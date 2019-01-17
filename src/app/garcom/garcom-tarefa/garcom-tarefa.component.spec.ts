import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarcomTarefaComponent } from './garcom-tarefa.component';

describe('GarcomTarefaComponent', () => {
  let component: GarcomTarefaComponent;
  let fixture: ComponentFixture<GarcomTarefaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarcomTarefaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarcomTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
