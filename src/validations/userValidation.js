const { body } = require('express-validator');

export const validatePayloadLogin = () => {
    return [
         body('email','O campo email é requerido').exists().not().isEmpty(),
        //  body('email','O campo email esta null').isEmpty(),
         body('password','O campo password é requerido').exists().not().isEmpty(),
        //  body('password','O campo password esta null').isEmpty()
    ]
}
