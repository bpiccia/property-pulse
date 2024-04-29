import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
  mongoose.set('strictQuery', true);

  // If db already connected
  if (connected) {
    console.log('MongoDB is already connected...')
    return;
  }

  // connect
  try {
    console.log(process.env.MONGODB_URI)
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log('MongoDB connected.')
  } catch (error) {
    console.log(error)
  }
}

export default connectDB;