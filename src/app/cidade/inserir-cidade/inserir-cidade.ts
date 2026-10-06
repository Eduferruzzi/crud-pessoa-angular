import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { CidadeService, Cidade, Estado, EstadoService } from '../../shared'
import { NgSelectModule } from '@ng-select/ng-select'

@Component({
  imports: [CommonModule, FormsModule, RouterModule, NgSelectModule],
  selector: 'app-inserir-cidade',
  styleUrl: './inserir-cidade.css',
  templateUrl: './inserir-cidade.html',
})
export class InserirCidade implements OnInit {
  @ViewChild('formCidade') formulario! : NgForm
  cidade: Cidade = new Cidade()
  estados: Estado[] = []

  private cidadeService = inject(CidadeService)
  private estadoService = inject(EstadoService)
  private router = inject(Router)

  ngOnInit(): void {
    this.estados = this.estadoService.listarTodos()
  }

  inserir():void{
    if(this.formulario.form.valid){
      this.cidadeService.inserir(this.cidade)
      this.router.navigate(['/cidades'])
    }
  }
}
