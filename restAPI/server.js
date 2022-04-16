var express = require('express')
app = express()

port = process.env.PORT || 5000

mongoose = require('mongoose')
Contact = require('./api/models/contactListModel')
Account = require('./api/models/loginModel')

bodyParser = require('body-parser')

mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://Pojanut:1234@cluster0.cwpvt.mongodb.net/ContactList?retryWrites=true&w=majority', function(error){
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

let port = process.env.PORT;
if(port==null || port==""){
    port = 5000;
}

app.listen(port)
console.log('Contact List API started on : '+ port)