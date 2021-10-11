const express = require('express')
const exphbs=require('express-handlebars')
const path = require('path')

const app=express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
app.engine('.hbs',exphbs({
    defaultLayout:'main',
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

app.use('/',require('./routes/translate'))

app.listen(3000,()=>{
    console.log('Server running on port:3000');
})