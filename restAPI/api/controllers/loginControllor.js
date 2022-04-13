'use strict'
var mongoose = require('mongoose')
Account = mongoose.model('accounts')

exports.checkAccount = function(req, res){
    const filter = {username: req.params.user}
    Account.findOne(filter, function(err, account){
        if(err) throw err
        console.log("login"+account)
        res.json(account)
    })
}