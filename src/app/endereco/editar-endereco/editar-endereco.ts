import { CommonModule } from '@angular/common'
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'
import { ActivatedRoute, Router, RouterModule } from '@angular/router'
import { Endereco } from '../../models/endereco.model'
import { EnderecoService } from '../../services/endereco-service'

@Component({
  imports: [CommonModule, FormsModule, RouterModule],
  selector: 'app-editar-endereco',
  styleUrl: './editar-endereco.css',
  templateUrl: './editar-endereco.html',
})
export class EditarEndereco implements OnInit{
  @ViewChild('formEndereco') formulario! : NgForm
  endereco: Endereco = new Endereco()

  private enderecoService = inject(EnderecoService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)

  ngOnInit(): void {
    let id : number = +this.route.snapshot.params['id']
    const res = this.enderecoService.buscarPorId(id)
    if (res !== undefined) {
      this.endereco = res
    } else {
      throw new Error ("Endereço não encontrado: id = " + id)
    }
  }

  atualizar():void {
    if(this.formulario.form.valid){
      this.enderecoService.atualizar(this.endereco)
      this.router.navigate(['/enderecos'])
    }
  }
}
