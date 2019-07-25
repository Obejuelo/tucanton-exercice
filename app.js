require('./config/config')
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')
const app = express();

// connect to db
mongoose.set('useCreateIndex', true)
mongoose.connect(process.env.URLDB, { useNewUrlParser: true }, (err, res) => {
	if(err) throw Error(err)
	console.log('DB online')
})

// middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use(require('./routes/index'))

// server listen
app.listen(process.env.PORT, (err) => {
	if(err) console.log(err)
	console.log(`app listen on port ${process.env.PORT}`)
})
