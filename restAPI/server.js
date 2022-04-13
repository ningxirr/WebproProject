var express = require('express')
app = express()

port = process.env.PORT || 5001

mongoose = require('mongoose')
Contact = require('./api/models/contactListModel')
Account = require('./api/models/loginModel')

bodyParser = require('body-parser')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/ContactList', function(error){
    if(error) throw error
    console.log('Successfully connected');
})

const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

var routes = require('./api/routes/contactListRoutes')
var routeslogin = require('./api/routes/loginRoutes')

routes(app)
routeslogin(app)

app.listen(port)
console.log('User List API started on : '+ port)