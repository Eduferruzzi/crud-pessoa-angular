import { CommonModule } from '@angular/common'
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'
import { ActivatedRoute, Router, RouterModule } from '@angular/router'
import { Cidade } from '../../shared/models/cidade.model'
import { CidadeService } from '../../shared/services/cidade-service'

@Component({
  imports: [CommonModule, FormsModule, RouterModule],
  selector: 'app-editar-cidade',
  styleUrl: './editar-cidade.css',
  templateUrl: './editar-cidade.html',
})
export class EditarCidade implements OnInit{
  @ViewChild('formCidade') formulario! : NgForm
  cidade: Cidade = new Cidade()

  private cidadeService = inject(CidadeService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)

  ngOnInit(): void {
    let id:number = +this.route.snapshot.params['id']
    const res = this.cidadeService.buscarPorId(id)
    if(res !== undefined)
      this.cidade = res
    else
      throw new Error ("Pessoa não encontrada: id = " + id)
  }

  atualizar():void{
    if(this.formulario.form.valid){
      this.cidadeService.atualizar(this.cidade)
      this.router.navigate(['/cidades'])
    }
  }
}
