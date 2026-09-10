import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarCidade } from './editar-cidade';

describe('EditarCidade', () => {
  let component: EditarCidade;
  let fixture: ComponentFixture<EditarCidade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarCidade],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarCidade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
