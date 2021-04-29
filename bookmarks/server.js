require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
app.use(express.json())

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
mongoose.connection.once('connected', () => console.log('What a time to be alive!'))
app.use('/bookmarks', require('./controllers/bookmarksController'))











app.listen(PORT, () => console.log("I need me some Jesus in my life Amen!: ", PORT))