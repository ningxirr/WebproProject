'use strict'
var mongoose = require('mongoose')
Contact = mongoose.model('contacts')

exports.addNewContact = function(req, res){
    var newContact = new Contact(req.body)
    console.log(req.body)
    newContact.save(function(err, contact){
        if(err) throw err
        // console.log(contact)
        res.json(contact)
    })
}

exports.showAllContact = function(req, res){
    var query = { sort: { firstName: 1 } }
    Contact.find({}, null, query, function(err, contact){
        if(err) throw err
        console.log(contact)
        res.json(contact)
    })
}

exports.showOneContact = function(req, res){
    //console.log(req.params.contactId)
    Contact.findById(req.params.contactId, function(err, contact){
        if(err) throw err
        console.log(contact)
        res.json(contact)
    })
}

exports.editAContact = function(req, res){
    console.log(req.params.contactId)
    var contactUser = {}
    contactUser = req.body
    console.log(contactUser)
    Contact.findByIdAndUpdate(req.params.contactId, contactUser, {new: true}, function(err, contact){
        if(err) throw err
        // console.log(contact)
        res.json(contact)
    })
}

exports.deleteAContact = function(req, res){
    //console.log(req.params.userId)
    Contact.findByIdAndRemove(req.params.contactId, function(err, contact){
        if(err) throw err
        const response = {
            message: "This contact id: "+ req.params.contactId +" has been deleted.",
            firstname: contact.firstname
        }
        res.json(response)
    })
}

