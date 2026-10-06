import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalPessoa } from './modal-pessoa';

describe('ModalPessoa', () => {
  let component: ModalPessoa;
  let fixture: ComponentFixture<ModalPessoa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPessoa],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalPessoa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
