import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router'
import { Usuario, UsuarioService } from '../../shared'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ModalUsuario } from '../modal-usuario'

@Component({
  imports: [RouterModule],
  selector: 'app-listar-usuario',
  styleUrl: './listar-usuario.css',
  templateUrl: './listar-usuario.html',
})
export class ListarUsuario implements OnInit{
  usuarios = signal<Usuario[]>([])

  private usuarioService = inject(UsuarioService)
  private modalService = inject(NgbModal)

  constructor(){}
  ngOnInit(): void {
    this.listarTodos()
  }

  listarTodos(): void {
    this.usuarioService.listarTodos().subscribe({
      next: (data: Usuario[]) => {
        if (data == null) {
          this.usuarios.set([])
        } else {
          this.usuarios.set(data)
        }
      }
    })
  }

  remover($event: any, usuario: Usuario): void {
    $event.preventDefault()

    if(confirm(`Deseja realmente remover o usuário ${usuario.nome}?`)) {
      this.usuarioService.remover(usuario.id!).subscribe({
        complete: () => {this.listarTodos()}
      })
    }
  }

  abrirModal(usuario: Usuario){
    const modalRef = this.modalService.open(ModalUsuario)
    modalRef.componentInstance.usuario = usuario
  }
}
