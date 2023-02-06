/*
    paht: /api/usuarios

*/
const { Router } = require('express');

const { validarJwt } = require('../middlewares/validar-jwt');
const { getUsuarios, getAccountsConnect, getQuestionPersonality } = require('../controller/usuarios');

const router = Router();

router.get('/', validarJwt, getUsuarios);
router.get('/onboardin/get-accounts', validarJwt, getAccountsConnect);
router.get('/onboardin/get-questionPersonality', validarJwt, getQuestionPersonality);

module.exports = router;
