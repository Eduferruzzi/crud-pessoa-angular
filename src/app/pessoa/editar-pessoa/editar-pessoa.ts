import { CommonModule } from '@angular/common'
import { Component, inject, OnInit, ViewChild } from '@angular/core'
import { FormsModule, NgForm } from '@angular/forms'
import { ActivatedRoute, Router, RouterModule } from '@angular/router'
import { Pessoa } from '../../shared/models/pessoa.model'
import { PessoaService } from '../../shared/services/pessoa-service'
import { Numerico } from '../../shared/directives/numerico'

@Component({
  imports: [ CommonModule, FormsModule, RouterModule, Numerico],
  selector: 'app-editar-pessoa',
  styleUrl: './editar-pessoa.css',
  templateUrl: './editar-pessoa.html',
})
export class EditarPessoa implements OnInit{
  @ViewChild('formPessoa') formulario! : NgForm
  pessoa: Pessoa = new Pessoa()

  private pessoaService = inject(PessoaService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id']
    const res = this.pessoaService.buscarPorId(id)
    if(res !== undefined)
      this.pessoa = res
    else
      throw new Error ("Pessoa não encontrada: id = " + id)
  }

  atualizar():void {
    if(this.formulario.form.valid) {
      this.pessoaService.atualizar(this.pessoa)
      this.router.navigate(['/pessoas'])
    }
  }
}
