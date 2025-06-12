import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SairContaComponent } from './sair-conta.component';

describe('SairContaComponent', () => {
  let component: SairContaComponent;
  let fixture: ComponentFixture<SairContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SairContaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SairContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
