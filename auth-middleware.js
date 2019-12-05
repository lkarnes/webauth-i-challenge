const bcrypt = require('bcryptjs');
const db = require('./api-model');

module.exports = (req, res, next) => {
    const  {username, password} = req.headers;
    console.log(username)
    db.findBy(username)
    .then(user => {
        if(user && bcrypt.compareSync(password, user.password)){
            next();
        }else{
            res.status(401).json({message: "Invalid Credentials"})
        }
    })
    .catch(err => {
        res.status(500).json({error: `Internal server ${err}`})
    })
}