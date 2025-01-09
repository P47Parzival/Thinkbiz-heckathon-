exports.getForecast = async (req, res) => {
    try {
      // Mock data
      const forecastData = [
        { week: "Week 1", actual: 400, predicted: 380 },
        { week: "Week 2", actual: 380, predicted: 390 },
      ];
      res.json(forecastData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  