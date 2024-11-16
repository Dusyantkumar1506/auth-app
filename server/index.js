import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToMongoDB from "./Models/db.js";
import authRouter from "./Routes/AuthRouter.js";
dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.use("/auth", authRouter);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
