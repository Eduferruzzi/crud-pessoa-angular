import { Routes } from '@angular/router';
import { ListarPessoa } from './pessoa/listar-pessoa/listar-pessoa'
import { InserirPessoa } from './pessoa/inserir-pessoa/inserir-pessoa'
import { EditarPessoa } from './pessoa/editar-pessoa/editar-pessoa'
import { ListarEndereco } from './endereco/listar-endereco/listar-endereco'
import { InserirEndereco } from './endereco/inserir-endereco/inserir-endereco'
import { EditarEndereco } from './endereco/editar-endereco/editar-endereco'
import { ListarCidade } from './cidade/listar-cidade/listar-cidade'
import { InserirCidade } from './cidade/inserir-cidade/inserir-cidade'
import { EditarCidade } from './cidade/editar-cidade/editar-cidade'
import { ListarEstado } from './estado/listar-estado/listar-estado'
import { InserirEstado } from './estado/inserir-estado/inserir-estado'
import { EditarEstado } from './estado/editar-estado/editar-estado'
import { Login } from './auth/login/login'
import { authGuard } from './auth/auth-guard'
import { Home } from './home/home'

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'pessoas',
        redirectTo: 'pessoas/listar'
    },
    {
        path: 'pessoas/listar',
        component: ListarPessoa,
        canActivate: [authGuard],
        data: {
            role: 'ADMIN,GERENTE,FUNC'
        }
    },
    {
        path: 'pessoas/novo',
        component: InserirPessoa,
        canActivate: [authGuard],
        data: {
            role: 'ADMIN,GERENTE,FUNC'
        }
    },
    {
        path: 'pessoas/editar/:id',
        component: EditarPessoa,
        canActivate: [authGuard],
        data: {
            role: 'ADMIN,GERENTE,FUNC'
        }
    },
    {
        path: 'enderecos',
        redirectTo: 'enderecos/listar'
    },
    {
        path: 'enderecos/listar',
        component: ListarEndereco,
        canActivate: [authGuard],
        data: {
            role: 'ADMIN,GERENTE'
        }
    },
    {
        path: 'enderecos/novo',
        component: InserirEndereco,
        canActivate: [authGuard],
        data: {
            role: 'ADMIN,GERENTE'
        }
    },
    {
        path: 'enderecos/editar/:id',
        component: EditarEndereco,
        canActivate: [authGuard],
        data: {
            role: 'ADMIN,GERENTE'
        }
    },
    {
        path: 'cidades',
        redirectTo: 'cidades/listar'
    },
    {
        path: 'cidades/listar',
        component: ListarCidade,
        canActivate: [authGuard],
        data: {
            role: 'ADMIN'
        }
    },
    {
        path: 'cidades/novo',
        component: InserirCidade,
        canActivate: [authGuard],
        data: {
            role: 'ADMIN'
        }
    },
    {
        path: 'cidades/editar/:id',
        component: EditarCidade,
        canActivate: [authGuard],
        data: {
            role: 'ADMIN'
        }
    },
    {
        path: 'estados',
        redirectTo: 'estados/listar'
    },
    {
        path: 'estados/listar',
        component: ListarEstado,
        canActivate: [authGuard],
        data: {
            role: 'ADMIN,FUNC'
        }
    },
    {
        path: 'estados/novo',
        component: InserirEstado,
        canActivate: [authGuard],
        data: {
            role: 'ADMIN,FUNC'
        }
    },
    {
        path: 'estados/editar/:id',
        component: EditarEstado,
        canActivate: [authGuard],
        data: {
            role: 'ADMIN,FUNC'
        }
    },
    {
        path: 'home',
        component: Home,
        canActivate: [authGuard],
        data: {
            role: 'ADMIN,GERENTE,FUNC'
        }
    }
];
