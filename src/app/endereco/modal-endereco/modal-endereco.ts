import { Component, inject, Input } from '@angular/core';
import { Endereco } from '../../shared'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { NgxMaskPipe } from 'ngx-mask'

@Component({
  imports: [ NgxMaskPipe ],
  selector: 'app-modal-endereco',
  styleUrl: './modal-endereco.css',
  templateUrl: './modal-endereco.html',
})
export class ModalEndereco {
  @Input() endereco!: Endereco
  public activeModal = inject(NgbActiveModal)
}
