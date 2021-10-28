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
        matchesDB.splice(matchIndex, 1)
        res.send('deleted')

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


const valideCreate = (match, res) => {
    if (!match.nameOfTeamA || match.nameOfTeamA.trim() == '') {
        res.send('Nome do time A obrigatório')
        return false
    } else if (!match.nameOfTeamB || match.nameOfTeamB.trim() == '') { 
        res.send('Nome do time B obrigatório')
        return false
    } else if(!match.matchDate || match.matchDate.trim() == ''){       
        res.send('Data do jogo obrigatória')
        return false
    } else if(!match.matchTime || match.matchTime.trim() == ''){   
        res.send('Hora do jogo obrigatória')
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