import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarPessoa } from './editar-pessoa';

describe('EditarPessoa', () => {
  let component: EditarPessoa;
  let fixture: ComponentFixture<EditarPessoa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarPessoa],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarPessoa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
