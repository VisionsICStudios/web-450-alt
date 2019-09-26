/*
============================================
; Title:  slide.js (Week 1)
; Author: Professor Krasso
; Modified: Aaron Wilson
; Date: 15 September 2019
; Description: MEAN NodeQuiz.
;===========================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slideSchema = new Schema({

  slideId: String,
  slideCount: Number,
  slide: String
}, {collection: 'slides'});

let Slide = mongoose.model('slide', slideSchema);

module.exports = Slide;
