import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'
import { Pessoa } from '../../shared/models/pessoa.model'
import { Router, RouterModule } from '@angular/router'
import { PessoaService } from '../../shared/services/pessoa-service'
import { CommonModule } from '@angular/common'
import { Numerico } from '../../shared/directives/numerico'

@Component({
  imports: [ CommonModule, FormsModule, RouterModule, Numerico ],
  selector: 'app-inserir-pessoa',
  styleUrl: './inserir-pessoa.css',
  templateUrl: './inserir-pessoa.html',
})
export class InserirPessoa {
  @ViewChild('formPessoa') formulario! : NgForm
  pessoa: Pessoa = new Pessoa()
  
  private pessoaService = inject(PessoaService)
  private router = inject(Router)

  inserir():void {
    if(this.formulario.form.valid) {
      this.pessoaService.inserir(this.pessoa)
      this.router.navigate( ["/pessoas"] )
    }
  }
}
