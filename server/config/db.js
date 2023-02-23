import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: `);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    // throw err;
  }
};

export default connectDB;
