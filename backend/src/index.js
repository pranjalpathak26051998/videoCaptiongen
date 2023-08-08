const express =require('express');
const app=express()
const route=require('../route/route')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',route)
const PORT=3300
app.listen(PORT, ()=>{
    console.log(`Express is running successfully at ${PORT}`)
})