const UserService = require('../services/userService');

exports.register = async (req, res) => {
  try {
    const user = await UserService.register(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await UserService.authenticate(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUserByUsername = async (req, res) => {
  try {
    const user = await UserService.findByUsername(req.params.username);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};






