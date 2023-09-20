const mongoose = require('mongoose');

const connectDB = async () => {
  
  try {
    mongoose.set('strictQuery', false);
    console.log("MongoDB URI:", process.env.MONGODB_URI);
    const conn = await mongoose.connect(process.env.MONGODB_URI, 
        { useNewUrlParser: true, useUnifiedTopology: true });
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  console.error(error.stack);
  }

}

module.exports = connectDB;