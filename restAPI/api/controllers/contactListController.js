'use strict'
var mongoose = require('mongoose')
Contact = mongoose.model('Contacts')

exports.addNewContact = function(req, res){
    var newContact = new Contact(req.body)
    console.log(req.body)
    newContact.save(function(err, contact){
        if(err) throw err
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
    const filter = {cid: req.params.contactId}
    Contact.findOne(filter, function(err, contact){
        if(err) throw err
        console.log("contact"+contact)
        res.json(contact)
    })
}

exports.editAContact = function(req, res){
    var contactUser = {}
    contactUser = req.body
    const filter = {cid: req.params.contactId}
    Contact.findOneAndUpdate(filter, contactUser, {new: true}, function(err, contact){
        if(err) throw err
        res.json(contact)
    })
}

exports.deleteAContact = function(req, res){
    const filter = {cid: req.params.contactId}
    Contact.findOneAndRemove(filter, function(err, contact){
        if(err) throw err
        const response = {
            message: "This contact id: "+ req.params.contactId +" has been deleted.",
            firstname: contact.firstname
        }
        res.json(response)
    })
}