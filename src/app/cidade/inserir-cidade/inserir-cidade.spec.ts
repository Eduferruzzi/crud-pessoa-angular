import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InserirCidade } from './inserir-cidade';

describe('InserirCidade', () => {
  let component: InserirCidade;
  let fixture: ComponentFixture<InserirCidade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InserirCidade],
    }).compileComponents();

    fixture = TestBed.createComponent(InserirCidade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
