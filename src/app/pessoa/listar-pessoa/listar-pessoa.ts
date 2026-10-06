import { Component, inject, OnInit } from '@angular/core';
import { PessoaService, Pessoa, CaixaAltaPipe } from '../../shared'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { NgxMaskPipe } from 'ngx-mask'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ModalPessoa } from '../modal-pessoa/modal-pessoa'
@Component({
  imports: [CommonModule, RouterModule, NgxMaskPipe, CaixaAltaPipe],
  selector: 'app-listar-pessoa',
  styleUrl: './listar-pessoa.css',
  templateUrl: './listar-pessoa.html',
})
export class ListarPessoa implements OnInit {
  private pessoaService = inject(PessoaService)
  private modalService = inject(NgbModal)
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

  abrirModalPessoa(pessoa: Pessoa){
    const modalRef = this.modalService.open(ModalPessoa)
    modalRef.componentInstance.pessoa = pessoa
  }
}
