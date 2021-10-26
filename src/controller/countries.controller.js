const countriesService = require('../service/countries.service')

const listAll = (req, res) => res.send(countriesService.listAll())

const create = (req, res) =>{
    countriesService.create(req.body)
    res.send('created')
}

const remove = (req, res) =>{
    countriesService.remove(req.params.id)
    res.send('Deleted')
}

const listSpec = (req, res) =>{
    res.send(countriesService.listSpec(req.params.id))

}

const update = (req, res)=>{
    countriesService.update(req.params.id, req.body)
    res.send('updated')
}

module.exports = {
    listAll,
    create,
    remove,
    listSpec,
    update
}