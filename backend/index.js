import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://root:root@hirehaven.5z3xxwm.mongodb.net/hirehaven?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected To DB");
  })
  .catch((err) => {
    console.log(err);
  });
