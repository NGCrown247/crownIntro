const crypto = require('crypto')
const textToUpper = require("./utils");
const path = require('path');

require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT;



app.use((req, res, next)=>{
    console.log(`\n------LOGS------- \n Method: ${req.method}\n URL: ${req.url}\n Time: ${new Date()}`)
    next()
})

app.use(express.static(path.join(__dirname, '../public')))

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, '../views', 'index.html'))
})


app.post("/create", (req, res)=>{


    const requiredFields = ["name", "email", "phone", "age", "password"];
    for (const field of requiredFields){
        if(req.body[field] === undefined || req.body[field] === null || req.body[field] === ""){
            return res.status(400).send(`${textToUpper.capitalize(field)} is required!`)
        }
    }

    const newUserId = crypto.randomUUID();

    const newuser = {
        ...req.body,
        id: newUserId,
    }


    return res.status(201).json({
        user: newuser,
        message: "User created successfully!"

    })



})




app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}`)
});