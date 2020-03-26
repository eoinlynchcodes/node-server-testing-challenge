const db = require('./data/dbConfig');

module.exports = {
    getAll,
    deleteABike
};

function getAll(){
    return db('myBikes');
}

function deleteABike(id){
    return null;
}