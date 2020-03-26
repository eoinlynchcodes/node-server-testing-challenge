const db = require('./data/dbConfig');

module.exports = {
    getAll,
    deleteABike
};

function getAll(){
    return db('myBikes');
}

function deleteABike(id){
    return db('myBikes')
    .where('id', id)
    .del()
}