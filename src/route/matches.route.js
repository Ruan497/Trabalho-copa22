const matchesController = require('../controller/matches.controller')
const express = require('express')

const router = express.Router()

const app = express()

router.post('/', matchesController.create)
router.get('/', matchesController.listAll)
router.get('/:id', matchesController.listSpec)
router.delete('/:id', matchesController.remove)
router.put('/:id', matchesController.update)

module.exports = router