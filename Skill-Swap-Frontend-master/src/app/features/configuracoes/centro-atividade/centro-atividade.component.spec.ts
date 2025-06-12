import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroAtividadeComponent } from './centro-atividade.component';

describe('CentroAtividadeComponent', () => {
  let component: CentroAtividadeComponent;
  let fixture: ComponentFixture<CentroAtividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentroAtividadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentroAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
