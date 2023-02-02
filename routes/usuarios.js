/*

    path: api/usuarios

*/

const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getUsuarios, getAccountsConnect, getQuestionPersonality } = require('../controllers/usuarios');

const router = Router();

router.get('/', validarJWT, getUsuarios);
router.get('/onboardin/get-accounts', validarJWT, getAccountsConnect);
router.get('/onboardin/get-questionPersonality', validarJWT, getQuestionPersonality);

module.exports = router;