const countriesDB = []
let countrieID = 1

const create = countrie =>{
    countrie.id = countrieID ++
    countriesDB.push(countrie)
}

const listAll = () => countriesDB

const remove = id =>{
    const countrieIndex = countriesDB.findIndex(c => c.id == id)
    if(countrieIndex >=0){
        countriesDB.splice(countrieIndex, 1)
    }
}

const update = (id, newCountrie) =>{
    const countrieIndex = countriesDB.findIndex(c => c.id == id)
    if(countrieIndex >=0){
        newCountrie.id = countrieID++
        countriesDB[countrieIndex] = newCountrie
    }
}

const listSpec = id =>{
    const countrieIndex = countriesDB.findIndex(c => c.id == id)
    if(countrieIndex >= 0){
        return countriesDB[countrieIndex]
    }
}

module.exports = {
    create,
    listAll,
    remove,
    update,
    listSpec
}