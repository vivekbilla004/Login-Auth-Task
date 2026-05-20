const express = require("express");
const router = express.Router();
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./Db/connectDB");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
