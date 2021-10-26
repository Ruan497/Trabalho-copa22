const matchesDB = []
let matchID = 1

const create = match =>{
    match.id = matchID ++
    matchesDB.push(match)
}

const listAll = () => matchesDB

const remove = (id, res) =>{
    const matchIndex = matchesDB.findIndex(m => m.id == id)
    if(matchIndex >=0){
        matchesDB.splice(matchIndex, 1)
    } else {
        res.statusCode = 400
    }
}

const update = (id, newMatch) =>{
    const matchIndex = matchesDB.findIndex(m => m.id == id)
    if(matchIndex >=0){
        newMatch.id = matchID++
        matchesDB[matchIndex] = newMatch
    }
}

const listSpec = id =>{
    const matchIndex = matchesDB.findIndex(m => m.id == id)
    if(matchIndex >= 0){
        return matchesDB[matchIndex]
    }
}

module.exports = {
    create,
    listAll,
    remove,
    update,
    listSpec
}