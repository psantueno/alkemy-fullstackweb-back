const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");

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

    register: (req, res) => {

        console.log("------------------")
        console.log(req.body)
        console.log("------------------")

        const { errors } = validationResult(req);

        if (errors.length > 0) {
            console.log(errors)
            return res.send({ errors });
        }

        else {

            Users.findOne({
                where: { email: req.body.email }
            })
                .then((user) => {
                    if (user) {
                        res.send({ errors: [{ msg: "El email ya se encuentra registrado." }] });
                    }
                    else {

                        Users.create(
                            {
                                name: req.body.name,
                                email: req.body.email,
                                password: bcryptjs.hashSync(req.body.password, 10)
                            })
                            .then(newUser => {
                                let response;
                                if (newUser) {
                                    response = {
                                        meta: {
                                            status: 200,
                                            msg: 'The user has been successfully created',
                                            url: 'api/users/register'
                                        },
                                        data: newUser
                                    }
                                    res.json(response);
                                }
                            })
                            .catch(error => res.send(error))
                    }
                })
                .catch(error => res.send(error));
        }
    }
}

module.exports = usersController;