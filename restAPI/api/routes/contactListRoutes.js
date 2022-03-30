'use strict'
module.exports = function(app){
    var contactList = require('../controllers/contactListController')

    app.route('/contacts')
        .post(contactList.addNewContact)
        .get(contactList.showAllContact)

    app.route('/contacts/:contactId')
        .get(contactList.showOneContact)
        .post(contactList.editAContact)
        .delete(contactList.deleteAContact)
}