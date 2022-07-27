const express = require("express");
const app = express();
const PORT = 2345;

const tasks = [
    {
        id: 1,
        text: "Do the stanky"
    },
    {
        id: 2,
        text: "Work out"
    },
    {
        id: 3,
        text: "Buy milk"
    },
    {
        id: 4,
        text: "Go to church"
    }
]


const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain)   

app.get("/", (req, res) => {
    res.send(tasks);
})

app.listen(PORT, ()=>{
    console.log(PORT)
});