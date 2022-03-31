'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ContactSchema = new Schema({
    cid:{
        type: String,
        Required: 'Please enter'
    },
    firstName: {
        type: String,
        Required: 'Please enter'
    },
    lastName: {
        type: String,
        Required: 'Please enter'
    },
    email: {
        type: String
    },
    mobile: {
        type: String,
        Required: 'Please enter'
    },
    facebook:{
        type: String
    },
    imageUrl:{
        type: String
    }
})

module.exports = mongoose.model('Contacts', ContactSchema)