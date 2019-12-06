const bcrypt = require('bcryptjs');
const db = require('./api-model');

module.exports = (req, res, next) => {
    if(req.session.loggedIn && req.session.loggedIn === true) {
        next();
    }else{
        res.status(400).json({message: "Restricted to logged in users"})
    }
}