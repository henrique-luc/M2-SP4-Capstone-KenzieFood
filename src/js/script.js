import { Pesquisa } from "./controllers/filtroPesquisa.js";
import { Todos }    from "./controllers/mostrarTodos.js";
import { Medalha }  from "./controllers/filtroMedalhas.js"
import { Posicao }  from "./controllers/filtroPosição.js"

await Todos.mostrarTodos()

const buttonPesquisar = document.querySelector('#pesquisa div button')

buttonPesquisar.addEventListener('click', () => {
    Pesquisa.pesquisarButton()
})

const buttonPosicao = document.querySelector('#botao--posicao')

buttonPosicao.addEventListener('click', () => {
   Posicao.posicaoPaises()
})

const buttonOuro = document.querySelector('#botao--ouro')

buttonOuro.addEventListener('click', () => {
    Medalha.pesquisarMedalhas('medal_gold')
})

const buttonPrata = document.querySelector('#botao--prata')

buttonPrata.addEventListener('click', () => {
    Medalha.pesquisarMedalhas('medal_silver')
})

const buttonBronze = document.querySelector('#botao--bronze')

buttonBronze.addEventListener('click', () => {
    Medalha.pesquisarMedalhas('medal_bronze')
})

