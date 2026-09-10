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

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'pessoas/listar',
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
    },
    {
        path: 'cidades',
        redirectTo: 'cidades/listar'
    },
    {
        path: 'cidades/listar',
        component: ListarCidade
    },
    {
        path: 'cidades/novo',
        component: InserirCidade
    },
    {
        path: 'cidades/editar/:id',
        component: EditarCidade
    }
];
