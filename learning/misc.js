function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(0);
}

app.post('/create', (req,res)=>{
    const requiredFields = ["name", "email", "phone", "age", "password"]
    for (const field of requiredFields){
        if (req.body[field] === "undefined" || req.body[field] === null || req.body[field] === ""){
            return res.status(400).send(`${capitalize(field)} is required!`)
        }

    }

    const newUserId = crypto.randomUUID()
        const newUser = {
            ...req.body,
            id: newUserId
        }


    const {name,email,phone,age,password} = req.body
        console.log(`ID: ${JSON.stringify(newUser.id)}`)
        console.log(`Name: ${name}`)
        console.log(`Email: ${email}`)
        console.log(`Phone: ${phone}`)
        console.log(`Age: ${age}`)
        console.log(`Password: ${password}`)
        
    return res.status(201).json({
        user: newUser,
        message: "User created successfully!"
    })
            

})
