const { error } = require('console');
const express = require('express')
const path = require('path');
const crypto = require('crypto')

require('dotenv').config();

const app = express()
app.use(express.json())


app.use(express.static(path.join(__dirname, 'public')))

app.get("/profile", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get("/", (req, res) => {
    res.status(200).json({message: "Hello, welcome to server 2"})
})





app.post("/create", (req, res) => {
    const userId = crypto.randomUUID();
    const {name,email,phone,age} = req.body
    if(!name || !email || !phone || !age){
        return res.status(400).json({error: "Missing Field"})
    }


    const newUser = {
        ...req.body,
        id: userId
    }

    return res.status(201).json({
       
        user: newUser,
        message: "Create success!",

    })
})


app.get("/user", (req, res) => {
    return res.json({id: req.query.id})
})





const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`App is listening to PORT ${PORT}`)
})