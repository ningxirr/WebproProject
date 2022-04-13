'use strict'
module.exports = function(app){
    var accountList = require('../controllers/loginControllor')

    app.route('/login/:user/:password')
    // app.route('/login/:userpass')
        .post(accountList.checkAccount)

}