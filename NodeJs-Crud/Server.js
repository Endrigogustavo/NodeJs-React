/*
//Servidor de forma local

import {createServer} from 'node:http'

//request devolve dados e response pega dados
const server = createServer((response, request) => {


    response.write('oi')
    return request.end()
})

server.listen(3333)
*/

import {fastify} from 'fastify'
import { DatabaseMemory } from './Database-Memory.js'

const server = fastify()

// / significa a rota na utl

// GET, POST, PUT, DELETE, PATCH
/*
server.get('/', () =>{
    return 'Hello Word'
})

server.get('/teste1', () =>{
    return 'teste1'
})

server.get('/teste2', () =>{
    return 'teste2'
})
*/

const database = new DatabaseMemory()

//navegador sempre usa o get 
server.post('/videos', (request, reply) =>{
    database.create({
        title: 'video 1',
        descricao: '1',
        duration: 110,
    })

    console.log(database.list())

    return reply.status(201).send()
})


//parametro enviado pela rota
server.put('/videos/:id', () =>{
    return 'teste2'
})

server.delete('/videos:id', () =>{
    return 'teste2'
})





server.listen({
    port: 3333,
})

