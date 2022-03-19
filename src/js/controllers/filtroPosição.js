import { Api }    from "../models/api.js"
import { Tabela } from "../models/tabela.js"
import { Todos }  from "./mostrarTodos.js"

class Posicao{

    static async posicaoPaises(){
        Todos.mostrarTodos()

        let paisesApi = await Api.requisicao();

        let ordemPosicao = paisesApi.sort(function (a, b){
            let totalMedalhasA = a.medal_bronze + a.medal_silver + a.medal_gold
            let totalMedalhasB = b.medal_bronze + b.medal_silver + b.medal_gold
            
            if(totalMedalhasA === totalMedalhasB){
                return b.medal_gold - a.medal_gold
            }
            
            return b.medal_gold - a.medal_gold
        })

        Tabela.templateTBody(ordemPosicao)

        console.log(ordemPosicao)
    }
}

export{ Posicao }