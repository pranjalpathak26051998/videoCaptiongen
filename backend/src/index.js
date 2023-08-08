const express =require('express');
const app=express()
const route=require('../route/route')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',route)
app.listen(3300, ()=>{
    console.log(`Express is running successfully at ${process.env.PORT}`)
})