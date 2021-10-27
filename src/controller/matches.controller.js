const matchesService = require('../service/matches.service')

const listAll = (req, res) => res.send(matchesService.listAll())

const create = (req, res) =>{
    matchesService.create(req.body, res)
}

const remove = (req, res) =>{
    matchesService.remove(req.params.id, res)
}

const listSpec = (req, res) => res.send(matchesService.listSpec(req.params.id, res))


const update = (req, res)=>{
    matchesService.update(req.params.id, req.body, res)
}

module.exports = {
    listAll,
    create,
    remove,
    listSpec,
    update
}