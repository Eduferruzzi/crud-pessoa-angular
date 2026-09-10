import { Routes } from '@angular/router';
import { ListarPessoa } from './pessoa/listar-pessoa/listar-pessoa'
import { InserirPessoa } from './pessoa/inserir-pessoa/inserir-pessoa'
import { EditarPessoa } from './pessoa/editar-pessoa/editar-pessoa'
import { ListarEndereco } from './endereco/listar-endereco/listar-endereco'
import { InserirEndereco } from './endereco/inserir-endereco/inserir-endereco'
import { EditarEndereco } from './endereco/editar-endereco/editar-endereco'

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'enderecos/listar',
        pathMatch: 'full'
    },
    {
        path: 'pessoas',
        redirectTo: 'pessoas/listar'
    },
    {
        path: 'pessoas/listar',
        component: ListarPessoa
    },
    {
        path: 'pessoas/novo',
        component: InserirPessoa
    },
    {
        path: 'pessoas/editar/:id',
        component: EditarPessoa
    },
    {
        path: 'enderecos',
        redirectTo: 'enderecos/listar'
    },
    {
        path: 'enderecos/listar',
        component: ListarEndereco
    },
    {
        path: 'enderecos/novo',
        component: InserirEndereco
    },
    {
        path: 'enderecos/editar/:id',
        component: EditarEndereco
    }
];
