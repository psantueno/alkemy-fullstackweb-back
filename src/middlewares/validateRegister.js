// validacion de registro de usuario
const { body } = require("express-validator");

const validateRegister = [
    body("name").notEmpty().withMessage("El nombre es requerido").bail()
        .isLength({min:3}).withMessage("El nombre debe tener al menos 3 caracteres").bail(),  
    body("email").notEmpty().withMessage("El correo electrónico es requerido").bail()
        .isEmail().withMessage("Escriba un correo electrónico válido").bail(),
    body("password").notEmpty().withMessage("La contraseña es requerida").bail()
        .isLength({min:8}).withMessage("La contraseña debe tener al menos 8 caracteres").bail()        
];

module.exports = validateRegister;