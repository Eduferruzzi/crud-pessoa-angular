import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LoginService, LoginModel } from '../../shared'

@Component({
  imports: [RouterLink, FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login implements OnInit{
  @ViewChild('formLogin') formLogin! : NgForm
  login: LoginModel = new LoginModel()
  loading: boolean = false
  message!: string

  private loginService = inject(LoginService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)
  constructor(){}

  ngOnInit(): void {
    if(this.loginService.usuarioLogado) {
      this.router.navigate(["/home"])
    } else {
      this.route.queryParams.subscribe(
        params=> {
          this.message = params["error"]
        }
      )
    }
  }

  logar(): void{
    this.loading = true
    if(this.formLogin.form.valid){
      this.loginService.login(this.login).subscribe((usu) => {
        if(usu != null) {
          this.loginService.usuarioLogado = usu
          this.loading = false
          this.router.navigate(["/home"])
        }
        else {
          this.loading = false
          this.message = "Usuário/Senha inválidos"
        }
      })
    }
  }
}
