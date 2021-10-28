const resultsService = require('../service/results.service')

const listAll = (req, res) => res.send(resultsService.listAll())

const create = (req, res) =>{
    resultsService.create(req.body, res)

}

const remove = (req, res) =>{
    resultsService.remove(req.params.id, res)
    
}

const listSpec = (req, res) => res.send(resultsService.listSpec(req.params.id, res))


const update = (req, res)=>{
    resultsService.update(req.params.id, req.body, res)
    
}

module.exports = {
    listAll,
    create,
    remove,
    listSpec,
    update
}