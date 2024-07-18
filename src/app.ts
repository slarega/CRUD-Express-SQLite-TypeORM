import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import homepageRouter from "./routes/homepage.js";
import usersRouter from "./routes/users.js";
// import serverRouter from "./routes/serverData.js";
import serverRouter from "./routes/server.js";

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homepageRouter);
app.use('/users', usersRouter);
app.use('/api', serverRouter);

export default app;
