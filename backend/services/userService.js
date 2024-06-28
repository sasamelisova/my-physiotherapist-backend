const User = require('../models/User');

exports.register = async (data) => {
  const { username, password, painLocation, painIntensity } = data;
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    throw new Error('User already exists');
  }
  return User.register(username, password, painLocation, painIntensity);
};

exports.authenticate = async ({ username, password }) => {
  return User.authenticate(username, password);
};

exports.findByUsername = async (username) => {
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

