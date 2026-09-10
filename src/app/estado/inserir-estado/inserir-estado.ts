import { CommonModule } from '@angular/common'
import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";
import { Router, RouterModule } from '@angular/router'
import { Estado } from '../../models/estado.model'
import { EstadoService } from '../../services/estado-service'

@Component({
  imports: [CommonModule, FormsModule, RouterModule],
  selector: 'app-inserir-estado',
  styleUrl: './inserir-estado.css',
  templateUrl: './inserir-estado.html',
})
export class InserirEstado {
  @ViewChild('formEstado') formulario! : NgForm
  estado: Estado = new Estado()

  private estadoService = inject(EstadoService)
  private router = inject(Router)

  inserir():void{
    if(this.formulario.form.valid){
      this.estadoService.inserir(this.estado)
      this.router.navigate(['/estados'])
    }
  }
}
