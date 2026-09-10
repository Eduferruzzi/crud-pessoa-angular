import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarPessoa } from './listar-pessoa';

describe('ListarPessoa', () => {
  let component: ListarPessoa;
  let fixture: ComponentFixture<ListarPessoa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarPessoa],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarPessoa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
