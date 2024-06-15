import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { options } from './constants/options.js';
import postRouter from './routes/post.router.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use('/api/post', postRouter);

mongoose.connect(options.database.mongoUrl).then((conn) => {
  console.log('MongoDB connected');
});

export default app;
