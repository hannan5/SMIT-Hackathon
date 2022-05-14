const express = require('express');
const app = express();
const bodyparse = require('body-parser')
const dbconnection = require('./connection')
require('dotenv').config()
const cors = require('cors')
const port = 4000;

app.use(bodyparse.json())
app.use(cors())
const user = require('./routes/userRoutes')
const course = require('./routes/courseRoutes')
const admin = require('./routes/AdminRoutes')

app.use('/api',user)
app.use('/api',course)
app.use('/api',admin)


const start = async () => {
    try {
        await dbconnection(process.env.MONGO_URI)
        app.listen((port), console.log(`App is running ${port}`))
    }
    catch (e) {
        console.log(e);
    }
}
start()