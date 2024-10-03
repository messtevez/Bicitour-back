const express = require('express')
const app = express()
const dotevn = require('dotenv')
const cors = require('cors')
const api = require('./routes/api.routes')

dotevn.config();
const port = process.env.PORT
const dbConnect = require('./db/config')
dbConnect()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const corsOptions = {
    origin: 'http://bicitour-x.s3-website.us-east-2.amazonaws.com',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};
app.use(cors(corsOptions));


app.use('/', api)
app.listen(port, () => {
    console.log(`Servidor conectado al puerto ${port}`)
})

