const router = require('./api')
const router2 = require("./userapi")
const cors = require('cors')
const express = require('express')

const app = express();
const port = process.env.PORT || 4900;

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }));


app.use(router);
app.use(router2)

app.get('/', async (req,res)=>{
    res.send("hello");
})

app.post('/signup-form', async (req, res) => {
    console.log('inside form')
    const formData = req.body;
    console.log(formData);
    res.send('Form data received successfully');
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
