import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalEndereco } from './modal-endereco';

describe('ModalEndereco', () => {
  let component: ModalEndereco;
  let fixture: ComponentFixture<ModalEndereco>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEndereco],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalEndereco);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
