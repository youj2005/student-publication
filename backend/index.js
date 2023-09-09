const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/router.js');
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use('/', routesHandler)

const uri = "mongodb+srv://" + process.env.USERNAME + ":" + process.env.PASSWORD + "@tlc.jctepyw.mongodb.net/?retryWrites=true&w=majority";

async function run() {
  try {
    const res = await mongoose.connect(uri);
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch(error) {
    console.log(error);
    await client.close();
  }
}

run();

const PORT = 4000; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});