import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dusyantkumar1506:WfAx4qEKHhsdSIiT@cluster0.bboh2.mongodb.net/auth-db?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error while connecting to MongoDB", error);
  }
};

export default connectToMongoDB;
