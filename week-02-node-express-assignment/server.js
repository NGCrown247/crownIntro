const express = require('express');
const app = express();
app.use(express.json());

require('dotenv').config();


//LOG REQUEST
app.use((req, res, next) => {
    console.log(`\n -----LOGS--------\n Method: ${req.method} \n URL: ${req.url}\n Time: ${new Date()}`);
    next();
})


//GET PROJECT TITLE
app.get("/", (req, res) => {
    return res.status(200).json({message: "My Week 2 API"});
})


// CREATE USER ACCOUNT
app.post("/create", (req, res) => {
    const {name,email,phone,age} = req.body;
    if(!name || !email || !phone || !age){
        return res.status(400).json({error: "All fields are required!"});
    }
    
    return res.status(201).json({
        user: req.body,
        successMsg: `${name} account has been created successfully!`
        
    });
    
});

// GET USER ID
app.get("/user/:id/profile", (req, res) => {
    const userId = req.params.id;
    res.status(200).json({
        userId: userId,
        message: `User with ID ${userId} retrieved successfully` 
    })
})



const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`);
})