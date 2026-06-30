import { fastify } from "fastify"
import cors from '@fastify/cors'
import * as banco from "./banco.js"
import * as funcao from "./functions.js"
const server = fastify({logger:true})

await server.register(cors, { 
  origin: true
});

server.get('/', (request, reply) => {
    const resposta = funcao.mostrar()
    return reply.status(200).send(resposta)
})

server.get('/:nome', (request, reply) => {
    const nome = request.params.nome
    const search = request.query.search
        
    let resposta
    if(search) resposta = funcao.pesquisa(nome, search)
    else  resposta = funcao.mostrarComParametro(nome)

    if(resposta){
        return reply.status(200).send(resposta)
    }else{
        return reply.status(400).send('digite algo válido!')
    }
})

server.listen({
    port: process.env.PORT || 3333,
    host: '0.0.0.0'
})
