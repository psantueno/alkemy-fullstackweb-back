// ************ BASE DATA USERS ************ //
const db = require('../database/models');
const { Users } = db;

const usersController = {

    list: (req, res) => {

        Users.findAll()
            .then(users => {
                res.json({ users })
            })
            .catch(error => res.send(error));
    },

}

module.exports = usersController;