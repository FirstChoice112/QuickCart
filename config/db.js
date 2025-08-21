import moongoose from "mongoose";

let cached = global.moongoose;

if (!cached) {
  cached = global.moongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = moongoose
      .connect(`${process.env.MONGODB_URI}/quickcart`, opts)
      .then((moongoose) => {
        return moongoose;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
