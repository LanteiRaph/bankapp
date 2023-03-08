require('dotenv').config();
import bodyParser from "body-parser";
import express from "express";
import expressLayouts from "express-ejs-layouts";
import mongoose from "mongoose";
import path from "path";
import config from 'config';
//Custome inports
import accountRoutes from "./server/routes/account.routes";
import appRoutes from './server/routes/app.routes';
const app = express();
const uri =
  "mongodb+srv://lantei:lantei95@cluster0.aybaugd.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => console.log("Connected To database"))
  .catch((err) => console.log(err));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.set("layout", path.join(__dirname, "/views/pages/layouts/main.ejs"));

app.set("views", path.join(__dirname, "/views")); 
app.use(express.static("public"));
app.use(expressLayouts);
app.set("view engine", "ejs");

app.use("/accounts", accountRoutes);
app.use('/',appRoutes )

const port = config.get<number>('port')

app.listen(port, () => {
  console.log(`Web Server running on port ${port}`);
});
