import { Api }    from "../models/api.js";
import { Tabela } from "../models/tabela.js"

class Pesquisa {

  static async pesquisarButton() {

    let PaisesApi = await Api.requisicao();

    const input   = document.querySelector('#pesquisa--pais')
    let busca     = input.value.toLowerCase()

    const buscaPaises = await PaisesApi.filter((pais) => {
      return pais.country.toLowerCase() === busca
    })

    Tabela.templateTBody(buscaPaises)
    
  }

}


export { Pesquisa }