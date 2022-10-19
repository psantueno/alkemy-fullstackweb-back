// validacion de login de usuario
const { body } = require("express-validator");

const validateLogin = [
     
    body("email").notEmpty().withMessage("El correo electrónico es requerido").bail()
        .isEmail().withMessage("Escriba un correo electrónico válido").bail(),
    body("password").notEmpty().withMessage("La contraseña es requerida").bail()
        .isLength({min:8}).withMessage("La contraseña debe tener al menos 8 caracteres").bail()        
];

module.exports = validateLogin;