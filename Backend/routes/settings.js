let settings = { notificationThreshold: 7 };

exports.getSettings = (req, res) => {
  res.json(settings);
};

exports.updateSettings = (req, res) => {
  settings = { ...settings, ...req.body };
  res.json(settings);
};
