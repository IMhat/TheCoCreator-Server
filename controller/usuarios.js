const { response} = require('express');

const axios = require('axios').default;

const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario');
const { generarJwt } = require('../helpers/jwt');
const {Accounts}= require('../models/onboarding/accounts-connect');
const {Question}= require('../models/onboarding/question');

const {Balance}= require('../models/quickbooksBalance');
const {Transaction}= require('../models/quickbooksTransaction');

const { url } = require('inspector');

const getUsuarios = async (req, res = response) => {
  const desde = Number(req.query.desde) || 0;
  const usuarios = await Usuario.find({ _id: { $ne: req.uid } })
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


//quickbooks

//post balance
const postQuickbooksBalance = async (req, res = response) => {
  try {
    const { title, totalExpense, totalIncome } = req.body;


    let balance = new Balance({
      title,
      totalExpense,
      totalIncome

    });
    
    balance= await balance.save();
    res.json(balance);
    
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}


const getQuickbooksBalance = async (req, res = response) => {
  try {
    const balance  = await Balance.find();
    res.json(balance);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}


//post transaction
const postQuickbooksTransaction = async (req, res = response) => {
  try {
    const { title, value, date } = req.body;


    let transaction = new Transaction({
      title,
      value,
      date

    });
    
    transaction= await transaction.save();
    res.json(transaction);
    
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

const getQuickbooksTransaction = async (req, res = response) => {
  try {
    const transaction  = await Transaction.find();
    res.json(transaction);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}







module.exports = {
  getUsuarios,
  getAccountsConnect,
  getQuestionPersonality,
  postQuickbooksBalance,
  getQuickbooksBalance,
  getQuickbooksTransaction,
  postQuickbooksTransaction

};
