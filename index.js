const fs = require("fs/promises");
const express = require("express");
const cors = require('cors');
const _ =  require("lodash");
const {v4:uuid} = require("uuid");

const app = express();

app.use(express.json());

app.get("/data", (req,res) =>{
    const colors = ["Black", "Red", "Pink", "Orange"];
    const shapes = ["Circle", "Triangle", "Square", "Rectangle"];
    
    res.json({
        color: _.sample(colors),
        shape: _.sample(shapes)
    })
})

app.listen(300,() => console.log('running'));