import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MudarContaComponent } from './mudar-conta.component';

describe('MudarContaComponent', () => {
  let component: MudarContaComponent;
  let fixture: ComponentFixture<MudarContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MudarContaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MudarContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
