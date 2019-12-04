const db = require('./dbConfig.js');

module.exports = {
    findBy,
    find,
    add
}

function add(user) {
    return db('users')
    .insert(user)
    .then(user => {
        return user
    })
}

function find() {

}

function findBy(filter) {
    return db('users')
    .select('id', 'username', 'password')
    .where(filter);
}