import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
console.log("🚀 ~ process.env.MONGODB_URI:", process.env.MONGODB_URI)
if (!uri) {
  throw new Error('MONGODB_URI not set in .env.local');
}

let client;
let clientPromise;

try {
  if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri);
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  } else {
    client = new MongoClient(uri);
    clientPromise = client.connect();
  }
} catch (err) {
  console.error('MongoClient connection error:', err);
}

export default clientPromise;
