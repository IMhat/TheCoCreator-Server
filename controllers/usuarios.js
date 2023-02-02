const { response } = require("express");
const Usuario = require('../models/usuario');
const {Accounts}= require('../models/onboarding/accounts-connect');
const {Question}= require('../models/onboarding/question');


const getUsuarios = async(req, res = response) => {

    const desde = Number(req.query.desde) || 0;


    const usuarios = await Usuario
        .find({ _id: { $ne: req.uid } })
        .sort('-online')
        .skip(desde)
        .limit(20);


    res.json({
        ok: true,
        usuarios,
    });
};

//onboarding
//get account
const getAccountsConnect = async (req, res = response)=>{
    try {
        const accounts = await Accounts.find();
        res.json(accounts);
      } catch (e) {
        res.status(500).json({ error: e.message });
      }
}


//get question
const getQuestionPersonality = async (req, res = response)=>{
    try {
        const questions = await Question.find();
        res.json(questions);
      } catch (e) {
        res.status(500).json({ error: e.message });
      }
}



module.exports = {
    getUsuarios,
    getAccountsConnect,
    getQuestionPersonality
};