const express =   require('express')
const mongoose = require('mongoose')
const routerUser = express.Router();

const cors = require('cors');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    studentId : Number,
    name: String,
    email : String,
    password : String,
    skills : Array,
    educations : Object,
    projects : Array,
    internships : Array,
    certificates : Array,
    resume : String,
    jwtToken :String 
},{versionKey:false,
    collection:"users"});

const users = mongoose.model("users", userSchema);

routerUser.get('/api/users',cors(), async function(req, res, next){
    const jobs = await users.find({});
    res.send(jobs);
    res.end();
});

// routerUser.post('/api/user', cors(), async function(req, res, next){
//     const {} = req.body;
// });

mongoose.connect('mongodb://localhost:27017/', {
    dbName:"cdc-web",
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Connected to MongoDB-users");
}).catch((err)=>{
    console.log(err);
});

module.exports = {routerUser, users};