import bodyParser from 'body-parser';
import express from 'express'
import accountRoute from './routes/account.routes';
const app = express()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/account',accountRoute);

app.use('/', (req, res) => {
    res.send({msg: 'Welcome To the My Bank Service'})
});

app.listen(5550,() => {
    console.log(`Web Server running on port 5550`)
})