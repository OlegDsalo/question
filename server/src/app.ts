import express from 'express';
import Router from './config/routes';
import mongoose from "mongoose";
import cors from 'cors'
const app = express();
const port = 8080;
const corsOptions = {
  origin: 'http://localhost:4200',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
};
app.use(cors());
app.use(express.json());


app.use('/api',Router);

mongoose.connect("mongodb+srv://olegdsalo:mXXWhwK2DjGV7ycl@questions.q7dyjzr.mongodb.net/?retryWrites=true&w=majority&appName=questions").then(() => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});
