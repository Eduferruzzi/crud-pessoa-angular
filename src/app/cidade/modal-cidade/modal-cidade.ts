import { Component, inject, Input } from '@angular/core';
import { Cidade } from '../../shared'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  imports: [],
  selector: 'app-modal-cidade',
  styleUrl: './modal-cidade.css',
  templateUrl: './modal-cidade.html',
})
export class ModalCidade {
  @Input() cidade!: Cidade
  public activeModal = inject(NgbActiveModal)
}
