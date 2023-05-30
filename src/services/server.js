const router = require('./api')
const router2 = require("./userapi")
const cors = require('cors')
const express = require('express')

const app = express();
const port = process.env.PORT || 4900;

app.use(express.json())
app.use(cors())

app.use(router);
app.use(router2)

app.get('/', async (req,res)=>{
    res.send("hello");
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
