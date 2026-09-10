import { CommonModule } from '@angular/common'
import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'
import { ActivatedRoute, Router, RouterModule } from '@angular/router'
import { Estado } from '../../models/estado.model'
import { EstadoService } from '../../services/estado-service'

@Component({
  imports: [CommonModule, FormsModule, RouterModule],
  selector: 'app-editar-estado',
  styleUrl: './editar-estado.css',
  templateUrl: './editar-estado.html',
})
export class EditarEstado {
  @ViewChild('formEstado') formulario! : NgForm
  estado: Estado = new Estado()

  private estadoService = inject(EstadoService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)

  ngOnInit(): void {
    let id:number = +this.route.snapshot.params['id']
    const res = this.estadoService.buscarPorId(id)
    if(res !== undefined)
      this.estado = res
    else
      throw new Error ("Pessoa não encontrada: id = " + id)
  }

  atualizar():void{
    if(this.formulario.form.valid){
      this.estadoService.atualizar(this.estado)
      this.router.navigate(['/estados'])
    }
  }
}
