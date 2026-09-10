import { Service } from '@angular/core';
import { Endereco } from '../models/endereco.model'

const LS_CHAVE = "enderecos"

@Service()
export class EnderecoService {
    listarTodos(): Endereco[] {
        const enderecos = localStorage[LS_CHAVE]
        return enderecos ? JSON.parse(enderecos) : []
    }

    inserir(endereco:Endereco):void {
        const enderecos = this.listarTodos()

        endereco.id = new Date().getTime()

        enderecos.push(endereco)

        localStorage[LS_CHAVE] = JSON.stringify(enderecos)
    }

    buscarPorId(id:number):Endereco | undefined{
        const enderecos = this.listarTodos()

        return enderecos.find(endereco => endereco.id === id)
    }

    atualizar(endereco:Endereco):void {
        const enderecos = this.listarTodos()

        enderecos.forEach( (obj, index, objs ) => {
            if(endereco.id === obj.id){
                objs[index] = endereco
            }
        })

        localStorage[LS_CHAVE] = JSON.stringify(enderecos)
    }

    remover(id:number): void{
        let enderecos = this.listarTodos()

        enderecos = enderecos.filter(endereco => endereco.id !== id)

        localStorage[LS_CHAVE] = JSON.stringify(enderecos)
    }
}
