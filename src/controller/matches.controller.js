const matchesService = require('../service/matches.service')

const listAll = (req, res) => res.send(matchesService.listAll())

const create = (req, res) =>{
    matchesService.create(req.body)
    res.send('created')
}

const remove = (req, res) =>{
    matchesService.remove(req.params.id, res)
    res.send('deleted')
}

const listSpec = (req, res) => res.send(matchesService.listSpec(req.params.id))


const update = (req, res)=>{
    matchesService.update(req.params.id, req.body)
    res.send('updated')
}

module.exports = {
    listAll,
    create,
    remove,
    listSpec,
    update
}