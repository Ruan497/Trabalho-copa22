const matchesDB = []
let matchID = 1

const create = (match, res) => {
    if (valideCreate(match, res)) {
        match.id = matchID++
        matchesDB.push(match)
        res.send('created')
    }

}

const listAll = () => matchesDB

const remove = (id, res) => {
    const matchIndex = matchesDB.findIndex(m => m.id == id)
    if (matchIndex >= 0) {
        res.send(matchesDB.splice(matchIndex, 1))

    } else {
        res.statusCode = 400
        res.send('id inválido')
    }
}

const update = (id, newMatch, res) => {
    const matchIndex = matchesDB.findIndex(m => m.id == id)
    if (valideCreate(newMatch, res)) {
        if (matchIndex >= 0) {
            newMatch.id = matchID++
            matchesDB[matchIndex] = newMatch
            res.send('updated')
        } else {
            res.statusCode = 400
            res.send('id inválido')
        }
    } 

}

const listSpec = (id, res) => {
    const matchIndex = matchesDB.findIndex(m => m.id == id)
    if (matchIndex >= 0) {
        return matchesDB[matchIndex]
    } else {
        res.statusCode = 400
        res.send('id inválido')
    }
}

const valideCreate = (av1, res) => {
    if (!av1.nome || av1.nome.trim() == '') {
        res.statusCode = 400
        res.send('Nome obrigatório')
        return false
    } else if (!av1.coach || av1.coach.trim() == '') {
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