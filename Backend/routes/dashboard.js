const express = require("express");
const router = express.Router();
const Inventory = require("../models/inventory");
const Donation = require("../models/donation");

// Define routes here
router.get("/", async (req, res) => {
  try {
    const totalInventory = await Inventory.countDocuments();
    const nearExpiry = await Inventory.countDocuments({ status: "near-expiry" });
    const donationsMade = await Donation.countDocuments();
    const wastageAvoided = await Inventory.aggregate([
      { $match: { status: "saved" } },
      { $group: { _id: null, total: { $sum: "$quantity" } } },
    ]);

    res.json({
      totalInventory,
      nearExpiry,
      donationsMade,
      wastageAvoided: wastageAvoided[0]?.total || 0,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
