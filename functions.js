import * as banco from "./banco.js"

export function mostrar(){
    return banco.linguagem
}

export function mostrarComParametro(nome){

    if(banco.linguagem[nome]){
        let resposta = banco.linguagem[nome]
        return resposta
    }
    else return ''
}

export function pesquisa(nome, search){
    search = search.toLowerCase()
    let lista = []

    if(banco.linguagem[nome]){
        let dicionario = banco.linguagem[nome]

        dicionario.forEach(element => {

            if(element.nome.toLowerCase().includes(search) || element.grupo.toLowerCase().includes(search) || element.descricao.toLowerCase().includes(search) || element.palavrasChave.includes(search)){

                const { palavrasChave, ...elementos} = element
                lista.push(elementos)
            }
        });
    }

    if(lista) return lista
}