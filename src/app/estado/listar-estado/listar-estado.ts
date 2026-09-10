import { CommonModule } from '@angular/common'
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'
import { EstadoService } from '../../services/estado-service'
import { Estado } from '../../models/estado.model'

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-listar-estado',
  styleUrl: './listar-estado.css',
  templateUrl: './listar-estado.html',
})
export class ListarEstado implements OnInit{
  private estadoService = inject(EstadoService)
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
}
