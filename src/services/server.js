const router = require('./api')
const myUserApi = require("./userapi")
const cors = require('cors')
const express = require('express')

const app = express();
const port = process.env.PORT || 4900;

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }));


app.use(router);
app.use(myUserApi.routerUser)

app.get('/', async (req,res)=>{
    res.send("hello");
})

app.post('/signup-form', async (req, res) => {
    const registerFormData = req.body;
    const { firstName, lastName, email, password } = req.body;
    // console.log(email);
    try{
        const check = await myUserApi.users.findOne({email:email});

        if(check){
            alert("email alredy exists");
            res.json("exists")
        }else{
            await myUserApi.users.insertMany({name:`${firstName}+" "+${lastName}`,
                                                        email:email,
                                                        password : password});
        }
    }catch{
        
    }
});

app.post('/login-form', async (req, res) => {
    const {email, password} = req.body;
    console.log(email);
    try{
        const check = await myUserApi.users.findOne({email:email});

        if(check){
           
            res.json("exists")
        }else{
            res.json("notexists")
        }
    }catch{
        
    }
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
