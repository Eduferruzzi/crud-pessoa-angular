import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarEstado } from './listar-estado';

describe('ListarEstado', () => {
  let component: ListarEstado;
  let fixture: ComponentFixture<ListarEstado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarEstado],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarEstado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
