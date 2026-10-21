import { Component, inject, OnInit, signal, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'
import { ActivatedRoute, Router, RouterModule } from '@angular/router'
import { Usuario, UsuarioService } from '../../shared'

@Component({
  imports: [FormsModule, RouterModule],
  selector: 'app-inserir-editar-usuario',
  styleUrl: './inserir-editar-usuario.css',
  templateUrl: './inserir-editar-usuario.html',
})
export class InserirEditarUsuario implements OnInit {
  @ViewChild('formUsuario') formUsuario! : NgForm
  novoUsuario = signal(true)
  usuario = signal(new Usuario())
  id: string = ""
  loading = signal(false)
  senhaAntiga: string = ""

  private usuarioService = inject(UsuarioService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)

  ngOnInit(): void {
    this.usuario.set(new Usuario())
    this.loading.set(false)

    this.id = this.route.snapshot.params['id']
    this.novoUsuario.set(!this.id)

    if(!this.novoUsuario()) {
      this.usuarioService.buscarPorId(this.id).subscribe(
        usuario => {
          this.usuario.set(usuario)
          this.senhaAntiga = usuario.senha ? usuario.senha : ""
          this.usuario().senha = ""
        }
      )
    }
  }

  salvar(): void{
    this.loading.set(true)
    if (this.formUsuario.form.valid) {
      if (this.novoUsuario()) {
        this.usuarioService.inserir(this.usuario()).subscribe(
          usuario => {
            this.loading.set(false)
            this.router.navigate(["/usuarios"])
          }
        )
      } else {
        if (this.usuario().senha === "") {
          this.usuario().senha = this.senhaAntiga
        }
        this.usuarioService.alterar(this.usuario()).subscribe(
          usuario => {
            this.loading.set(false)
            this.router.navigate(["/usuarios"])
          }
        )
      }
    }
  }
}
