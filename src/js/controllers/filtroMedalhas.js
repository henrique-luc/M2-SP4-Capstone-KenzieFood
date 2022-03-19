import { Api }    from "../models/api.js"
import { Tabela } from "../models/tabela.js"
import { Todos }  from "./mostrarTodos.js"

class Medalha {

    static async pesquisarMedalhas(medalha) {
        Todos.mostrarTodos()

        let paisesApi = await Api.requisicao();

        let ordem     = paisesApi.sort(function (a, b) {
            return b[medalha] - a[medalha]
        })
        
        Tabela.templateTBody(ordem)
        
    }
}

export { Medalha }