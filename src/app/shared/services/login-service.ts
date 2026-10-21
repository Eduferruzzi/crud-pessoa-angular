import { inject, Service } from '@angular/core';
import { LoginModel, Usuario } from '../models'
import { map, Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'

const LS_CHAVE:string = "usuarioLogado"

@Service()
export class LoginService {
    private httpClient = inject(HttpClient)

    BASE_URL = "http://localhost:5000/usuarios"

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

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
        return this.httpClient.get<Usuario[]>(this.BASE_URL, this.httpOptions)
                .pipe( map( lista => {
                    let usu = lista.find(u => u.login===login.login &&
                                              u.senha===login.senha)
                    if (usu != undefined)
                        return usu
                    else 
                        return null
                }))
    }
}
