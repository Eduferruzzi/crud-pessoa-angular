import { Component, inject, Input } from '@angular/core';
import { Usuario } from '../../shared'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  imports: [],
  selector: 'app-modal-usuario',
  styleUrl: './modal-usuario.css',
  templateUrl: './modal-usuario.html',
})
export class ModalUsuario {
  @Input() usuario: Usuario = new Usuario()

  public activeModal = inject(NgbActiveModal)
}
