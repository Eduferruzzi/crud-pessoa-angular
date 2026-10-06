import { CommonModule } from '@angular/common'
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'
import { EnderecoService, Endereco } from '../../shared'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ModalEndereco } from '../modal-endereco/modal-endereco'

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-listar-endereco',
  styleUrl: './listar-endereco.css',
  templateUrl: './listar-endereco.html',
})
export class ListarEndereco implements OnInit {
  private enderecoService = inject(EnderecoService)
  private modalService = inject(NgbModal)
  enderecos: Endereco[] = []

  ngOnInit(): void {
    this.enderecos = this.enderecoService.listarTodos()
  }

  remover($event: any, endereco: Endereco):void {
    $event.preventDefault()
    if(confirm(`Deseja realmente remover o endereco ${endereco.rua}, ${endereco.numero}?`)){
      this.enderecoService.remover(endereco.id)
      this.enderecos = this.enderecoService.listarTodos()
    }
  }

  abrirModalEndereco(endereco: Endereco){
    const modalRef = this.modalService.open(ModalEndereco)
    modalRef.componentInstance.endereco = endereco
  }
}
