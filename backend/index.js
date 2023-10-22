import express from "express";
import { PORT, mongoDB } from "./config.js";
import mongoose from "mongoose";
import BookRoute from "./routes/bookRoute.js";
import cors from "cors";

const app = express();

app.use(express.json());

// Middelware for handling a CORS Policy

app.use(cors());

// app.use(
//   cors({
//     origin: "http://localhost:7777",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (req, res) => {
  try {
    res.status(200).send("Hello There!");
  } catch (error) {
    res.status(400).send(error);
  }
});

app.use("/books", BookRoute);

mongoose
  .connect(mongoDB)
  .then(() => {
    console.log(`Database Conenting`);
    app.listen(PORT, () => {
      console.log(`PORT is listening at ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
