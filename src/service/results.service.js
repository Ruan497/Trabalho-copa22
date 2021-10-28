const resultsDB = []
let resultID = 1

const create = (result, res) => {
    if (valideCreate(result, res)) {
        result.id = resultID++
        resultsDB.push(result)
        res.send('created')
    }

}

const listAll = () => resultsDB

const remove = (id, res) => {
    const resultIndex = resultsDB.findIndex(r => r.id == id)
    if (resultIndex >= 0) {
        resultsDB.splice(resultIndex, 1)
        res.send('deleted')

    } else {
        res.statusCode = 400
        res.send('id inválido')
    }
}

const update = (id, newresult, res) => {
    const resultIndex = resultsDB.findIndex(r => r.id == id)
    if (valideCreate(newresult, res)) {
        if (resultIndex >= 0) {
            newresult.id = resultID++
            resultsDB[resultIndex] = newresult
            res.send('updated')
        } else {
            res.statusCode = 400
            res.send('id inválido')
        }
    }

}

const listSpec = (id, res) => {
    const resultIndex = resultsDB.findIndex(r => r.id == id)
    if (resultIndex >= 0) {
        return resultsDB[resultIndex]
    } else {
        res.statusCode = 400
        res.send('id inválido')
    }
}


const valideCreate = (result, res) => {
    if (!result.nameOfTeamA || result.nameOfTeamA.trim() == '') {
        res.send('Nome do time A obrigatório')
        return false
    } else if (!result.nameOfTeamB || result.nameOfTeamB.trim() == '') {
        res.send('Nome do time B obrigatório')
        return false
    } else if (!result.scoreOfTeamA || result.scoreOfTeamA.trim() == '') {
        res.send('gols do time A inválido')
        return false
    } else if (!result.scoreOfTeamB || result.scoreOfTeamB.trim() == '') {
        res.send('gols do time B inválido')
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