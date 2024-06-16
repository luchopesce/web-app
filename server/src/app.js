import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { options } from './config/options.js';
import postRouter from './routes/post.router.js';
import authRouter from './routes/auth.router.js';
import passport from 'passport'
import {googleAuth} from './config/passport.js'
import helmet from 'helmet'

const app = express();
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  helmet({
    contentSecurityPolicy: false,
    frameguard: true
  })
);
app.use(
  cors({
    origin: 'http://localhost:3000', // Reemplaza esto con el origen de tu cliente
    credentials: true,
  })
);

app.use(cookieParser());
app.use(morgan('dev'));
app.use(passport.initialize())
app.use('/api/post', postRouter);
app.use('/api/auth', authRouter);
await googleAuth()

mongoose.connect(options.database.mongoUrl).then((conn) => {
  console.log('MongoDB connected');
});

export default app;
