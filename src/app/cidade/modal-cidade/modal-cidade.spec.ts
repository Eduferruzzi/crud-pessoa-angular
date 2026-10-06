import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalCidade } from './modal-cidade';

describe('ModalCidade', () => {
  let component: ModalCidade;
  let fixture: ComponentFixture<ModalCidade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCidade],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCidade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
