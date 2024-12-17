const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./config/database");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const apiRoutes = require("./routes/api.route");
// Middleware to parse JSON request bodies
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", apiRoutes);

module.exports = app;
