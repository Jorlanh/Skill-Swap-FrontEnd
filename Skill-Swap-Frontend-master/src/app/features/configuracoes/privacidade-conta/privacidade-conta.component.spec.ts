import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacidadeContaComponent } from './privacidade-conta.component';

describe('PrivacidadeContaComponent', () => {
  let component: PrivacidadeContaComponent;
  let fixture: ComponentFixture<PrivacidadeContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacidadeContaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacidadeContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
