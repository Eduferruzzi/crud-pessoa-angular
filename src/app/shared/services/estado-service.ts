import { Service } from '@angular/core';
import { Estado } from '../models/estado.model'

const LS_CHAVE = "estados"

@Service()
export class EstadoService {
    listarTodos(): Estado[]{
            const estados = localStorage[LS_CHAVE]
    
            return estados ? JSON.parse(estados) : []
        }
        
        inserir(estado: Estado): void {
            const estados = this.listarTodos()
    
            estado.id = new Date().getTime()
    
            estados.push(estado)
    
            localStorage[LS_CHAVE] = JSON.stringify(estados)
        }
    
        buscarPorId(id:number):Estado | undefined{
            const estados = this.listarTodos()
    
            return estados.find(cidade => cidade.id === id)
        }
    
        remover(id:number):void{
            let estados = this.listarTodos()
    
            estados = estados.filter(cidade => cidade.id !== id)
    
            localStorage[LS_CHAVE] = JSON.stringify(estados)
        }
    
        atualizar(estado:Estado):void{
            this.remover(estado.id)
            this.inserir(estado)
        }
}
