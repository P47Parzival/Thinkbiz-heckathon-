const Donation = require("../models/donation");

exports.getDonations = async (req, res) => {
  try {
    const donations = await Donation.find();
    res.json(donations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addDonation = async (req, res) => {
  try {
    const { items, recipient, date } = req.body;
    const newDonation = new Donation({ items, recipient, date });
    await newDonation.save();
    res.status(201).json(newDonation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
