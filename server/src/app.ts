import express from 'express';
import Router from './config/routes';
import mongoose, {ConnectOptions} from "mongoose";

const app = express();
const port = 8080 || process.env.PORT;

app.use(Router);

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/myapp').then(() => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});
