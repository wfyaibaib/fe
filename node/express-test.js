const express = require('express')

const app = express()

app.use('/', (req, res)=>{
    res.send('hello')
})

app.listen(1234, ()=>{
   console.log('1234') 
})