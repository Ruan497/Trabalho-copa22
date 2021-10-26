const countriesController = require('../controller/countries.controller')
const express = require('express')

const router = express.Router()

const app = express()

router.post('/', countriesController.create)
router.get('/', countriesController.listAll)
router.get('/:id', countriesController.listSpec)
router.delete('/:id', countriesController.remove)
router.put('/:id', countriesController.update)

module.exports = router