const countriesDB = []
let countrieID = 1

const create = (countrie, res) => {
    if (valideCreate(countrie, res)) {
        countrie.id = countrieID++
        countriesDB.push(countrie)
        res.send('created')

    }
}

const listAll = () => countriesDB

const remove = (id, res) => {
    const countrieIndex = countriesDB.findIndex(c => c.id == id)
    if (countrieIndex >= 0) {
        countriesDB.splice(countrieIndex, 1)
        res.send('deleted')
    } else {
        res.statusCode = 400
        res.send('id inválido')
    }
}

const update = (id, newCountrie, res) => {
    if (valideCreate(newCountrie, res)) {
        const countrieIndex = countriesDB.findIndex(c => c.id == id)
        if (countrieIndex >= 0) {
            newCountrie.id = countrieID++
            countriesDB[countrieIndex] = newCountrie
            res.send('updated')
        } else {
            res.statusCode = 400
            res.send('id inválido')
        }
    }
}

const listSpec = (id, res) => {
    const countrieIndex = countriesDB.findIndex(c => c.id == id)
    if (countrieIndex >= 0) {
        return countriesDB[countrieIndex]
    } else {
        res.statusCode = 400
        res.send('id inválido')
    }
}

const valideCreate = (match, res) => {
    if (!match.nome || match.nome.trim() == '') {
        res.statusCode = 400
        res.send('Nome obrigatório')
        return false
    } else if (!match.coach || match.coach.trim() == '') {
        res.statusCode = 400
        res.send('Coach obrigatório')
        return false
    }
    return true

}

module.exports = {
    create,
    listAll,
    remove,
    update,
    listSpec
}