const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

//middleware FIRST
app.use(cors());
app.use(express.json());

//connect DB
connectDB();

//routes
const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

//test route (IMPORTANT for debugging)
app.get("/", (req, res) => {
  res.send("Server is working");
});

//start server LAST
app.listen(3000, () => {
  console.log("Server running on port 3000");
});