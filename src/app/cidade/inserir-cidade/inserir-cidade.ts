import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'
import { Cidade } from '../../shared/models/cidade.model'
import { CidadeService } from '../../shared/services/cidade-service'
import { Router, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

@Component({
  imports: [CommonModule, FormsModule, RouterModule],
  selector: 'app-inserir-cidade',
  styleUrl: './inserir-cidade.css',
  templateUrl: './inserir-cidade.html',
})
export class InserirCidade {
  @ViewChild('formCidade') formulario! : NgForm
  cidade: Cidade = new Cidade()

  private cidadeService = inject(CidadeService)
  private router = inject(Router)

  inserir():void{
    if(this.formulario.form.valid){
      this.cidadeService.inserir(this.cidade)
      this.router.navigate(['/cidades'])
    }
  }
}
