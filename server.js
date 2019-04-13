require('dotenv').config();
import express, { static as Staticworkaround } from 'express';
import { urlencoded, json } from "body-parser";
import helmet from 'helmet';
import cors from 'cors';

import routes from './exports/routes/'

const app = express().use(urlencoded({ extended: true })).use(json()).use(cors({ origin: '*', optionsSuccessStatus: 204 })).use(Staticworkaround('public')).use(helmet());

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
