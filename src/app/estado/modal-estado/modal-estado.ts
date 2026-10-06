import { Component, inject, Input } from '@angular/core';
import { Estado } from '../../shared'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  imports: [],
  selector: 'app-modal-estado',
  styleUrl: './modal-estado.css',
  templateUrl: './modal-estado.html',
})
export class ModalEstado {
  @Input() estado!: Estado
  public activeModal = inject(NgbActiveModal)
}
