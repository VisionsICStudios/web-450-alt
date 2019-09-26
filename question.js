/*
============================================
; Title:  question.js (Week 1)
; Author: Professor Krasso
; Modified: Aaron Wilson
; Date: 15 September 2019
; Description: MEAN NodeQuiz.
;===========================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({

  questionId: String,
  question: String
}, {collection: 'questions'});

let Question = mongoose.model('Question', questionSchema);

module.exports = Question;
