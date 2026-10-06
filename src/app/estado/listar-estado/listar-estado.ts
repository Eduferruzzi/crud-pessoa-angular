import { CommonModule } from '@angular/common'
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'
import { EstadoService, Estado } from '../../shared'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ModalEstado } from '../modal-estado/modal-estado'

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-listar-estado',
  styleUrl: './listar-estado.css',
  templateUrl: './listar-estado.html',
})
export class ListarEstado implements OnInit{
  private estadoService = inject(EstadoService)
  private modalService = inject(NgbModal)
  estados: Estado[] = []

  ngOnInit(): void {
    this.estados = this.estadoService.listarTodos()
  }

  remover($event: any, estado: Estado): void {
    $event.preventDefault()
    if(confirm(`Deseja mesmo remover o estado ${ estado.nome }?`)) {
      this.estadoService.remover(estado.id)
      this.estados = this.estadoService.listarTodos()
    }
  }

  abrirModalEstado(estado: Estado){
    const modalRef = this.modalService.open(ModalEstado)
    modalRef.componentInstance.estado = estado
  }
}
