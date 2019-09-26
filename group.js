/*
============================================
; Title:  group.js (Week 1)
; Author: Professor Krasso
; Modified: Aaron Wilson
; Date: 15 September 2019
; Description: MEAN NodeQuiz.
;===========================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({

  groupId: String,
  groupQuestion: Object,
  groupAnswerA: Object,
  groupAnswerB: Object,
  groupAnswerC: Object,
  groupAnswerD: Object,
  correctAnswer: Object,
  groupArray: Array

}, {collection: 'groups'});

let Group = mongoose.model('group', groupSchema);

module.exports = Group;

