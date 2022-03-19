class Api {

    static async requisicao() {
        const response = await fetch ('https://kenzie-olympics.herokuapp.com/paises')
        const data     = await response.json()

        return data
    }
}

export { Api }