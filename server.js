require('dotenv').config();
import express, { static as Staticworkaround } from 'express';
import { urlencoded, json } from "body-parser";
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import cors from 'cors';

import routes from './exports/routes/'

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 204,
  credentials: true
}

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(cors(corsOptions));
app.use(Staticworkaround('public'));
app.use(helmet());

app.options('*', cors());

app.use(function (req, res, next) {
  console.log(req.body);
  console.log(req.method);
  next();
});

app.use('/v1', routes);

app.use(function (req, res) {
    res.status(404);
    res.send('Not a valid endpoint');
});

app.listen(process.env.PORT);
console.log("Listening on port: " + process.env.PORT);

export default app;