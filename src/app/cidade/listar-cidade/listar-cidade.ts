import { Component, inject, OnInit } from '@angular/core';
import { CidadeService } from '../../services/cidade-service'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { Cidade } from '../../models/cidade.model'

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-listar-cidade',
  styleUrl: './listar-cidade.css',
  templateUrl: './listar-cidade.html',
})
export class ListarCidade implements OnInit{
  private cidadeService = inject(CidadeService)
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
}
