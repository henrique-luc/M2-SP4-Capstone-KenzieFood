class Tabela {

    static templateTHead() {
        
        const tabela = document.querySelector('table')
        const thead  = document.createElement('thead')

        thead.innerHTML=`
            <tr>
                <th>
                    <button id="botao--posicao">Posição ^</button>
                </th>
                <th>
                    <h4 id="pais">País</h4>
                </th>
                <th>
                    <button id="botao--ouro">Ouro ^</button>
                </th>
                <th>
                    <button id="botao--prata">Prata ^</button>
                </th>
                <th>
                    <button id="botao--bronze">Bronze ^</button>
                </th>
                <th>
                    <h4 id="total">Total</h4>
                </th>
            </tr>
        `
        
        return tabela.appendChild(thead)
    }

    static async templateTBody(listaMedalhas) {

        const tabela = document.querySelector('table')
        const tbody  = document.createElement('tbody')

        tabela.innerHTML = ''

        Tabela.templateTHead()

        tabela.appendChild(tbody)

        listaMedalhas.forEach((paises, indice) => {
            const {
                country,
                flag_url,
                medal_bronze,
                medal_gold,
                medal_silver
            } = paises;

            const tr = document.createElement('tr')

            let totalMedalhas = medal_bronze + medal_silver + medal_gold

            tr.innerHTML = `
                <td>${indice + 1}°</td>
                <td>
                    <figure>
                        <img src="${flag_url}" alt="${country}">
                        <figcaption>${country}</figcaption>
                        <p>${country}</p>
                    </figure>
                </td>
                <td>${medal_gold}</td>
                <td>${medal_silver}</td>
                <td>${medal_bronze}</td>
                <td>${totalMedalhas}</td>
            `            

            tbody.appendChild(tr)
        })
    }
}

export { Tabela }