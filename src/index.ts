import bodyParser from 'body-parser';
import express from 'express'
import expressLayouts  from 'express-ejs-layouts'
import path from 'path';
import accountRoute from './server/routes/account.routes';
const app = express()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('layout', path.join(__dirname, '/views/pages/layouts/main.ejs'))

app.set('views', path.join(__dirname, '/views'));
app.use(express.static('public'));
app.use(expressLayouts)
app.set('view engine', 'ejs');

app.use('/',accountRoute);

app.listen(5550,() => {
    console.log(`Web Server running on port 5550`)
})