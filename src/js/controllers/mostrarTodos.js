import { Api }    from "../models/api.js"
import { Tabela } from "../models/tabela.js"

class Todos {

    static async mostrarTodos(){

        let listaPaises = await Api.requisicao();
        return Tabela.templateTBody(listaPaises)
    }
}

export { Todos }