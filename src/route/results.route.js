const resultsController = require('../controller/results.controller')
const express = require('express')

const router = express.Router()

const app = express()

router.post('/', resultsController.create)
router.get('/', resultsController.listAll)
router.get('/:id', resultsController.listSpec)
router.delete('/:id', resultsController.remove)
router.put('/:id', resultsController.update)

module.exports = router