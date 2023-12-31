const {Router} = require('express')
const getCharById = require('../Controllers/getCharById')
const login = require('../Controllers/login')
const postFav = require('../Controllers/postFav')
const postUser = require('../Controllers/postUser')
const deleteFav = require('../Controllers/deleteFav')

const router = Router()

router.get('/character/:id', getCharById)
router.get('/login', login)
router.post('/login', postUser)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)

module.exports = router