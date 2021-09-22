import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postsRoutes from './routes/posts.js';

const app = express();


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postsRoutes); //This adds the prefix posts to all the routes handled in postRoutes

const CONNECTION_URL = "mongodb+srv://tucu:tucu123@cluster0.jnvvm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

//const mongooseOptions = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.log(error.message));

  //mongoose.set('useFindAndModify', false);