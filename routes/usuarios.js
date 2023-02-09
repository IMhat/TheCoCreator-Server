/*
    paht: /api/usuarios

*/
const { Router } = require('express');

const { validarJwt } = require('../middlewares/validar-jwt');
const { getUsuarios, getAccountsConnect, getQuestionPersonality, getQuickbooksBalance, postQuickbooksBalance, postQuickbooksTransaction, getQuickbooksTransaction } = require('../controller/usuarios');

const router = Router();

router.get('/', validarJwt, getUsuarios);
router.get('/onboardin/get-accounts', validarJwt, getAccountsConnect);
router.get('/onboardin/get-questionPersonality', validarJwt, getQuestionPersonality);

//quickbooks
router.post('/quickbooks/balance-save',postQuickbooksBalance)
router.get('/quickbooks/balance', validarJwt, getQuickbooksBalance);
//transactions
router.post('/quickbooks/transaction-save',postQuickbooksTransaction);
router.get('/quickbooks/transaction', validarJwt, getQuickbooksTransaction);


module.exports = router;

