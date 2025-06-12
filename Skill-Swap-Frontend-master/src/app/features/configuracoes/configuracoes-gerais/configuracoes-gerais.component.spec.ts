import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracoesGeraisComponent } from './configuracoes-gerais.component';

describe('ConfiguracoesContaComponent', () => {
  let component: ConfiguracoesGeraisComponent;
  let fixture: ComponentFixture<ConfiguracoesGeraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiguracoesGeraisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracoesGeraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
