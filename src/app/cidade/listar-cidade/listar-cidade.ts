import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { CidadeService, Cidade } from '../../shared'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ModalCidade } from '../modal-cidade/modal-cidade'

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-listar-cidade',
  styleUrl: './listar-cidade.css',
  templateUrl: './listar-cidade.html',
})
export class ListarCidade implements OnInit{
  private cidadeService = inject(CidadeService)
  private modalService = inject(NgbModal)
  cidades : Cidade[] = []

  ngOnInit(): void {
    this.cidades = this.cidadeService.listarTodos()
  }

  remover($event: any, cidade: Cidade): void {
    $event.preventDefault()
    if(confirm(`Deseja mesmo remover a cidade ${ cidade.nome }?`)) {
      this.cidadeService.remover(cidade.id)
      this.cidades = this.cidadeService.listarTodos()
    }
  }

  abrirModalCidade(cidade: Cidade){
    const modalRef = this.modalService.open(ModalCidade)
    modalRef.componentInstance.cidade = cidade 
  }
}
