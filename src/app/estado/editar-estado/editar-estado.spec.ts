import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarEstado } from './editar-estado';

describe('EditarEstado', () => {
  let component: EditarEstado;
  let fixture: ComponentFixture<EditarEstado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarEstado],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarEstado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
