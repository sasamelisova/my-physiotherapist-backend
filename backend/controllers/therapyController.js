const TherapyService = require('../services/therapyService');
const { validateAddTherapySession, validateGetTherapySession } = require('../utils/validators');

exports.addTherapySession = async (req, res) => {
  const { error } = validateAddTherapySession(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const session = await TherapyService.addTherapySession(req.params.username, req.body);
    res.status(201).json({ status: "201", data: session });
  } catch (error) {
    res.status(error.code).json({ message: error.message });
  }
};

exports.getTherapySessions = async (req, res) => {
  const { error } = validateGetTherapySession(req.params);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const sessions = await TherapyService.getTherapySessions(req.params.username);
    res.status(200).json({ status: "200", data: sessions });
  } catch (error) {
    res.status(error.code).json({ message: error.message });
  }
};


