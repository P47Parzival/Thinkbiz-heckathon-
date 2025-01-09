const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  items: [{ name: String, quantity: Number }],
  recipient: String,
  date: Date,
});

module.exports = mongoose.model("Donation", donationSchema);
