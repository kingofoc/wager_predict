import mongoose from 'mongoose';

// // Define the shape of our cached object
// interface MongooseCache {
//   conn: typeof mongoose | null;
//   promise: Promise<typeof mongoose> | null;
// }

// // Extend the NodeJS global type
// declare global {
//   var mongoose: MongooseCache | undefined;
// }

// const mongodbUri = process.env.MONGODB_URI as string;
// const mongodbName = process.env.MONGODB_NAME as string;

// if (!mongodbUri || !mongodbName) {
//     throw new Error("Check your .env: MONGODB_URI or MONGODB_NAME is missing");
// }

// /** * Use a global variable to persist the connection across hot-reloads 
//  * and prevent multiple connections in development.
//  */
// const cached: MongooseCache = global.mongoose || { conn: null, promise: null };

// if (!global.mongoose) {
//   global.mongoose = cached;
// }

// export default async function connectDb() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       dbName: mongodbName,
//       maxPoolSize: 10,
//       bufferCommands: false, // Prevents that 10s wait error you saw
//       serverSelectionTimeoutMS: 5000, // Fails faster if connection is bad
//     };

//     console.log("Connecting to MongoDB...");
//     cached.promise = mongoose.connect(mongodbUri, opts).then((mongoose) => {
//       console.log("DATABASE CONNECTION SUCCESSFUL");
//       return mongoose;
//     });
//   }

//   try {
//     cached.conn = await cached.promise;
//   } catch (e) {
//     cached.promise = null; // Reset promise on error
//     console.error("DATABASE CONNECTION ERROR:", e);
//     throw e;
//   }

//   return cached.conn;
// }

const mongodbUri = process.env.MONGODB_URI as string 
const mongodbName = process.env.MONGODB_NAME as string

if(!mongodbUri) {
    throw new Error("Mongodb uri not set")
}
if(!mongodbName){
    throw new Error("Mongodb name not set")
}

let isConnected: boolean = false;

export default async function connectDb () {
  if (isConnected) {
    // ✅ Already connected
    return;
  }

  try {
    const db = await mongoose.connect(mongodbUri, { dbName : mongodbName,
      maxPoolSize : 10,
      socketTimeoutMS : 45000,
      serverSelectionTimeoutMS : 5000,
    })
    isConnected = !!db.connections[0].readyState;
    console.log("DATABASE CONNECTION SUCCESSFUL")
  } catch(err){
    console.log(err)
  }
}

// mongodb+srv://dbUser:@ONE225Thornz01#@wagerpredict.abq0unm.mongodb.net/?appName=wagerpredict
