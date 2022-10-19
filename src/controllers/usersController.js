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

        const { errors } = validationResult(req);

        if (errors.length > 0) {
            errors.map( (object) => {return delete object.value});  // se eliminan los valores por seguridad. 
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
    },

    login: async (req, res) => {

        const { errors } = validationResult(req);

        if (errors.length > 0) {
            errors.map( (object) => {return delete object.value});  // se eliminan los valores por seguridad. 
            return res.send({ errors });
        }

        const user = await Users.findOne({
            where: { email: req.body.email }
        });

        const passCorrect = user === null 
        ? false 
        : await bcryptjs.compareSync(req.body.password, user.password);


        if (!(user && passCorrect)) {
            res.status(401).json({ msg: "Usuario o contraseña inválida." });   // no se debe aclarar cual es el incorrecto por 
        } else {                                                               //protección contra hackeos. 
            res.send({ name: user.name })
        }

    }

}

module.exports = usersController;