import { Service } from '@angular/core';
import { LoginModel, Usuario } from '../models'
import { Observable, of } from 'rxjs'

const LS_CHAVE:string = "usuarioLogado"

@Service()
export class LoginService {
    public get usuarioLogado(): Usuario | null {
        let usu = localStorage[LS_CHAVE]
        return (usu ? JSON.parse(localStorage[LS_CHAVE]) : null)
    }
    public set usuarioLogado(usuario: Usuario) {
        localStorage[LS_CHAVE] = JSON.stringify(usuario)
    }

    logout(){
        delete localStorage[LS_CHAVE]
    }

    login(login: LoginModel): Observable<Usuario|null>{
        let usu = new Usuario(1, login.login, login.login, login.senha, "FUNC")

        if(login.login == login.senha){
            if(login.login == "admin") {
                usu.perfil = "ADMIN"
            } else if (login.login == "gerente") {
                usu.perfil = "GERENTE"
            }
            return of(usu)
        } else {
            return of(null)
        }
    }
}
