'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    firstName: {
        type: String,
        Required: 'Please enter'
    },
    lastName: {
        type: String,
        Required: 'Please enter'
    },
    email: {
        type: String,
        Required: 'Please enter'
    },
    mobile: {
        type: Number,
        Required: 'Please enter'
    },
    facebook:{
        type: String,
        // default :Date.now
    },
    imageUrl:{
        type: String,
        // default :Date.now
    }
})

module.exports = mongoose.model('Contacts', UserSchema)