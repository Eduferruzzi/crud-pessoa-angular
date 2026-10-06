import { Component, inject, Input, input } from '@angular/core';
import { NgxMaskPipe } from 'ngx-mask'
import { Pessoa } from '../../shared'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  imports: [ NgxMaskPipe ],
  selector: 'app-modal-pessoa',
  styleUrl: './modal-pessoa.css',
  templateUrl: './modal-pessoa.html',
})
export class ModalPessoa {
  @Input() pessoa!: Pessoa
  public activeModal = inject(NgbActiveModal)
}
