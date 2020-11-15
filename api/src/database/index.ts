import mongoose from 'mongoose';

export default function connect(): Promise<typeof mongoose> {
  return mongoose.connect('mongodb://localhost:27017/MEDNESS', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
}
