/*
============================================
; Title:  answer.js (Week 1)
; Author: Professor Krasso
; Modified: Aaron Wilson
; Date: 15 September 2019
; Description: MEAN NodeQuiz.
;===========================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({

  answerId: String,
  answer: String,
  isRight: Boolean
}, {collection: 'answers'});

let Answer = mongoose.model('answer', answerSchema);

module.exports = Answer;
