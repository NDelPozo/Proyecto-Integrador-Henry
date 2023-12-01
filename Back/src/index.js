require('dotenv').config()
const server = require('./app')
const {sequelize} = require('./DB_connection')

const {PORT} = process.env

server.listen(PORT, async () =>{
    await sequelize.sync({alter: true})
    console.log('Server is listening on port:' + PORT)})