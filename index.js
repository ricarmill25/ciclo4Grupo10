const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db')
const userRouter = require('./routes/user-router')
const peajeRouter = require('./routes/peaje-router')
const consorcioRouter = require('./routes/consorcio-router')

const app = express()
const apiPort = 8000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(cors())
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', userRouter)
app.use('/api', peajeRouter)
app.use('/api', consorcioRouter)


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
