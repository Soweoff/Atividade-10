import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade10Component } from './atividade-10.component';

describe('Atividade10Component', () => {
  let component: Atividade10Component;
  let fixture: ComponentFixture<Atividade10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Atividade10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Atividade10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
