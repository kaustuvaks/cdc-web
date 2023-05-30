const express =   require('express')
const mongoose = require('mongoose')
const router = express.Router();

const cors = require('cors');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    job: {
        type:String
    },
    branches: {
        type : Array
    },
},{versionKey:false,
    collection:"job-desc"});

const job = mongoose.model("job-desc", jobSchema);

router.get('/api/jobs',cors(), async function(req, res, next){
    const jobs = await job.find({});
    res.send(jobs);
    res.end();
});

mongoose.connect('mongodb://localhost:27017/', {
    dbName:"cdc-web",
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Connected to MongoDB-job-desc");
}).catch((err)=>{
    console.log(err);
});

module.exports = router;