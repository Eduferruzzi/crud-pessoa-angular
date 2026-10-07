import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, Router } from '@angular/router';
import { NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem } from '@ng-bootstrap/ng-bootstrap';
import { LoginService, Usuario } from './shared'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Cadastro de Pessoas');

  private router = inject(Router)
  private loginService = inject(LoginService)

  get usuarioLogado(): Usuario | null {
    return this.loginService.usuarioLogado
  }

  logout(){
    this.loginService.logout()
    this.router.navigate(['/login'])
  }

  temPermissao(...perfis: string[]): boolean{
    let usu = this.usuarioLogado
    if(usu != null && perfis.length > 0) {
      for (let p of perfis){
        if(usu.perfil.indexOf(p) != -1) {
          return true
        }
      }
    }
    return false
  }
}
