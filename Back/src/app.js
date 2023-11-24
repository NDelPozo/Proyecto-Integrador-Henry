const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const router = require('./Routes/index')


const server = express()



server.use(morgan('dev'))
server.use(cors())
server.use(express.json())

server.use('/rickandmorty', router)

module.exports = server
