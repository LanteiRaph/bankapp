import bodyParser from 'body-parser';
import express from 'express'
import accountRoute from './src/server/routes/account.routes';
const app = express()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('layout', '../view/pages/layouts/main.ejs')
app.set('view engine', 'ejs');

app.use('/account',accountRoute);

app.get('/', (req, res) => {
    res.send({msg: 'Welcome To the My Bank Service'})
});

app.listen(5550,() => {
    console.log(`Web Server running on port 5550`)
})