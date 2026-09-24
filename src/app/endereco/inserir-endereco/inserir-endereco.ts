import { CommonModule } from '@angular/common'
import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import { EnderecoService } from '../../shared/services/endereco-service'
import { Endereco } from '../../shared/models/endereco.model'

@Component({
  imports: [CommonModule, FormsModule, RouterModule],
  selector: 'app-inserir-endereco',
  styleUrl: './inserir-endereco.css',
  templateUrl: './inserir-endereco.html',
})
export class InserirEndereco {
  @ViewChild('formEndereco') formulario! : NgForm
  endereco: Endereco = new Endereco()

  private enderecoService = inject(EnderecoService)
  private router = inject(Router)

  inserir():void {
    if(this.formulario.form.valid){
      this.enderecoService.inserir(this.endereco)
      this.router.navigate(["/enderecos"])
    }
  }
}
