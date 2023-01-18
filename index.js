const fs = require("fs/promises");
const express = require("express");
const cors = require('cors');
const _ =  require("lodash");
const {v4:uuid} = require("uuid");

const app = express();

app.listen(300,() => console.log('running'));