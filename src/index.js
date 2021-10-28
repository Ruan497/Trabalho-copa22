const express = require('express')
const ui = require('swagger-ui-express')
const app = express()
const doc = require('../swagger.json')
const countriesRoute = require('./route/countries.route')
const matchesRoute = require('./route/matches.route')
const resultsRoute = require('./route/results.route')

app.use(express.json())

app.use('/documentation', ui.serve, ui.setup(doc))
app.use('/countries', countriesRoute)
app.use('/matches', matchesRoute)
app.use('/results', resultsRoute)


const port = 8087

app.listen(port, () =>{
    console.log(`server started on port ${port}`)
})
