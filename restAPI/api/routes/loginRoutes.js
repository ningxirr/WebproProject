'use strict'
module.exports = function(app){
    var accountList = require('../controllers/loginControllor')

    app.route('/login/:user/:password')
        .post(accountList.checkAccount)

}