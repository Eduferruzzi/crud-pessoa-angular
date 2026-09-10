import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarEndereco } from './listar-endereco';

describe('ListarEndereco', () => {
  let component: ListarEndereco;
  let fixture: ComponentFixture<ListarEndereco>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarEndereco],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarEndereco);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
