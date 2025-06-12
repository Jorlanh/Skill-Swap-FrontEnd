import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegurancaPermissoesComponent } from './seguranca-permissoes.component';

describe('SegurancaPermissoesComponent', () => {
  let component: SegurancaPermissoesComponent;
  let fixture: ComponentFixture<SegurancaPermissoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegurancaPermissoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegurancaPermissoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
