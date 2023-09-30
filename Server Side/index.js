import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";

const app = express();

// configure env
dotenv.config();

// db config
connectDB();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);

//    REST APIs
app.get("/", (req, res) => {
  res.send("Welcome");
});

//   PORT
const port = process.env.PORT || 5000;

// Listen Server

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
