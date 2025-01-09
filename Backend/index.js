const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import Routes
const dashboardRoutes = require("./routes/dashboard");
const inventoryRoutes = require("./routes/inventory");
// const forecastRoutes = require("./routes/forecast");
// const donationRoutes = require("./routes/donations");
// const settingsRoutes = require("./routes/settings");

const app = express();
app.use(
    cors({
      origin: "http://localhost:5173/", // Replace with your frontend URL
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
  );
  
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/foodLossDB");

// Use Routes
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/inventory", inventoryRoutes);
// app.use("/api/forecast", forecastRoutes);
// app.use("/api/donations", donationRoutes);
// app.use("/api/settings", settingsRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));