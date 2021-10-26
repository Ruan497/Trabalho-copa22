const express = require('express')
const app = express()
const countriesRoute = require('./route/countries.route')
const matchesRoute = require('./route/matches.route')

app.use(express.json())

app.use('/countries', countriesRoute)
app.use('/matches', matchesRoute)


const port = 8087

app.listen(port, () =>{
    console.log(`server started on port ${port}`)
})