const express= require('express')

const app=express()

const expresslayouts=require('express-ejs-layouts')


const indexroute=require('./routes/index')



app.set('view engine','ejs')
app.set('views',__dirname+'/views')
app.set('layout',__dirname+'/layouts/layout')
app.use(expresslayouts)
app.use(express.static('public'))

app.use('/',indexroute)


app.listen(process.env.PORT || 3000)

