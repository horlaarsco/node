// Packages
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

//Routes
import shopRoutes from './routes/shopRoutes.js'

const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Use Routes
app.use(shopRoutes)

app.listen(1000, () => {
    console.log("Server started successfully");
    mongoose.connect('mongodb://localhost:27017/intro', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
});