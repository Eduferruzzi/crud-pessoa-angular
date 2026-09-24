import { Service } from '@angular/core';
import { Pessoa } from '../models/pessoa.model';

const LS_CHAVE = "pessoas"

@Service()
export class PessoaService {
    // Retornar todas as pessoas
    listarTodos(): Pessoa[]{
        const pessoas = localStorage[LS_CHAVE]
        // Precisa do condicional, pois retornar undefined se
        // a chave não existe
        return pessoas ? JSON.parse(pessoas) : []
    }

    inserir(pessoa: Pessoa): void{
        const pessoas = this.listarTodos()

        // Seta um ID único
        // Usamos o Timestamp, quantidade de segundos desde 1970
        pessoa.id = new Date().getTime()

        // Adiciona no final da lista
        pessoas.push(pessoa)

        // Armazena no LocalStorage
        localStorage[LS_CHAVE] = JSON.stringify(pessoas)
    }

    buscarPorId(id:number):Pessoa | undefined{
        const pessoas = this.listarTodos()

        // Efetua a busca
        // find() : retorna o primeiro elemento da lista que
        // satisfaz a condição, caso contrário, undefined
        return pessoas.find(pessoa => pessoa.id === id)
    }

    atualizar(pessoa: Pessoa): void{
        const pessoas = this.listarTodos()

        // Varre a lista de pessoas
        // Quando encontra pessoa com mesmo id, altera a lista
        pessoas.forEach( (obj, index, objs) => {
            if (pessoa.id === obj.id) {
                objs[index] = pessoa
            }
        })

        localStorage[LS_CHAVE] = JSON.stringify(pessoas)
    }

    remover(id:number): void{
        let pessoas = this.listarTodos()

        // filter() : retorna a mesma lista contendo todos
        // os registros que satisfazem a condição
        pessoas = pessoas.filter(pessoa => pessoa.id !== id)

        localStorage[LS_CHAVE] = JSON.stringify(pessoas)
    }
}
