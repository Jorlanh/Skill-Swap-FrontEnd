import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteracaoCompletaComponent } from './alteracao-completa.component';

describe('AlteracaoCompletaComponent', () => {
  let component: AlteracaoCompletaComponent;
  let fixture: ComponentFixture<AlteracaoCompletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlteracaoCompletaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlteracaoCompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
