import { CommonModule } from '@angular/common'
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'
import { EnderecoService } from '../../services/endereco-service'
import { Endereco } from '../../models/endereco.model'

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-listar-endereco',
  styleUrl: './listar-endereco.css',
  templateUrl: './listar-endereco.html',
})
export class ListarEndereco implements OnInit {
  private enderecoService = inject(EnderecoService)
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
}
