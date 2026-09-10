import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InserirPessoa } from './inserir-pessoa';

describe('InserirPessoa', () => {
  let component: InserirPessoa;
  let fixture: ComponentFixture<InserirPessoa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InserirPessoa],
    }).compileComponents();

    fixture = TestBed.createComponent(InserirPessoa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
