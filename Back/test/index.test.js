const session = require('supertest')
const app = require('../src/app')



const agent = session(app)

describe('Test de RUTAS', ()=>{
    describe('GET /rickandmorty/character/:id', ()=>{
        it('Responde con status: 200', async ()=>{
          await agent.get('/rickandmorty/character/1')
          .expect(200)
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"',
        async ()=>{
            const {body} = await agent.get('/rickandmorty/character/1')
    
            expect(body).toHaveProperty('id')
            expect(body).toHaveProperty('name')
            expect(body).toHaveProperty('species')
            expect(body).toHaveProperty('gender')
            expect(body).toHaveProperty('status')
            expect(body).toHaveProperty('origin')
            expect(body).toHaveProperty('image')
    
        })
        it('Si hay un error responder con status: 500', async ()=> {

            const response = (await agent.get('/rickandmorty/character/1000')) 
            // .statusCode
            // expect(response).toBe(404)
            console.log(response)
    })
    })
    describe('GET /rickandomorty/login',()=>{
        it('Credenciales correctas', async ()=>{
            const {body} = await agent.get('/rickandmorty/login?email=nickdelpo@gmail.com&password=contra10')

           expect(body.access).toEqual(true)
        })
        it('Credenciales incorrectas', async ()=>{
            const {body} = await agent.get('/rickandmorty/login?email=nickdelpo@gmail.com&password=contra110')

           expect(body.access).toEqual(false)
        })
    })
    describe('POST /rickandmorty/fav', ()=>{
        const character1 = {id:'1', name:'Rick'}
        const character2 = {id:'2', name:'Morty'}

        it('Devuelve el personaje enviado por body', async()=>{
            const {body} = await agent.post('/rickandmorty/fav')
            .send(character1)
            expect(body).toContainEqual(character1)
        })
        it('Devuelve el o los personajes previos y el actual', async ()=>{
            const {body} = await agent.post('/rickandmorty/fav')
            .send(character2)

            expect(body).toContainEqual(character1)
            expect(body).toContainEqual(character2)
        })

    })  
    const character1 = {id:'1', name:'Rick'}
    const character2 = {id:'2', name:'Morty'}

    describe('DELETE /rickandmorty/fav/:id', () => {
        it('', async ()=>{
            const {body} = await agent.delete('/rickandmorty/fav/5')

            expect(body).toContainEqual(character1, character2)
        })
        it('Elimina correctamente el personaje especificado por ID', async ()=>{
            const {body} = await agent.delete('/rickandmorty/fav/1')

            expect(body).not.toContainEqual(character1)
        })
    })
})
