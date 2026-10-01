import { Component, inject, OnInit } from '@angular/core';
import { PessoaService } from '../../shared/services/pessoa-service'
import { Pessoa } from '../../shared/models/pessoa.model'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { NgxMaskPipe } from 'ngx-mask'
import { CaixaAltaPipe } from '../../shared/pipes/caixa-alta.pipe'

@Component({
  imports: [CommonModule, RouterModule, NgxMaskPipe, CaixaAltaPipe],
  selector: 'app-listar-pessoa',
  styleUrl: './listar-pessoa.css',
  templateUrl: './listar-pessoa.html',
})
export class ListarPessoa implements OnInit {
  private pessoaService = inject(PessoaService)
  pessoas: Pessoa[] = []

  ngOnInit(): void {
   this.pessoas = this.pessoaService.listarTodos()
  }

  remover($event: any, pessoa: Pessoa):void{
    $event.preventDefault()
    if(confirm(`Deseja realmente remover a pessoa ${pessoa.nome}?`)) {
      this.pessoaService.remover(pessoa.id!)
      this.pessoas = this.pessoaService.listarTodos()
    }
  }
}
