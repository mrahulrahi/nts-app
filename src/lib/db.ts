import mongoose from 'mongoose';

const uri = process.env.MONGO_URI || 'your_mongo_connection_string';

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}

let isConnected = false;

export const connectToDatabase = async () => {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(uri, {
      // Updated options format
    });
    isConnected = true;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Connection to MongoDB failed');
  }
};
