const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  name: String,
  category: String,
  quantity: Number,
  expiryDate: Date,
  status: {
    type: String,
    default: "ok", // "ok", "near-expiry", "expired"
  },
});

module.exports = mongoose.model("Inventory", inventorySchema);
