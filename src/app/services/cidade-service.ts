import { Service } from '@angular/core';
import { Cidade } from '../models/cidade.model'

const LS_CHAVE = "cidades"

@Service()
export class CidadeService {
    listarTodos(): Cidade[]{
        const cidades = localStorage[LS_CHAVE]

        return cidades ? JSON.parse(cidades) : []
    }
    
    inserir(cidade: Cidade): void {
        const cidades = this.listarTodos()

        cidade.id = new Date().getTime()

        cidades.push(cidade)

        localStorage[LS_CHAVE] = JSON.stringify(cidades)
    }

    buscarPorId(id:number):Cidade | undefined{
        const cidades = this.listarTodos()

        return cidades.find(cidade => cidade.id === id)
    }

    remover(id:number):void{
        let cidades = this.listarTodos()

        cidades = cidades.filter(cidade => cidade.id !== id)

        localStorage[LS_CHAVE] = JSON.stringify(cidades)
    }

    atualizar(cidade:Cidade):void{
        this.remover(cidade.id)
        this.inserir(cidade)
    }
}
