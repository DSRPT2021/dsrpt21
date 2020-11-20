import mongoose from 'mongoose';
import dotenv from 'dotenv-safe';

dotenv.config();

mongoose.connect('mongodb://localhost:27017/DSRPT21', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.Promise = global.Promise;

export default mongoose;
