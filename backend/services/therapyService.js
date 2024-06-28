const User = require('../models/User');
const TherapySession = require('../models/TherapySession');

exports.addTherapySession = async (username, sessionData) => {
  const user = await User.findOne({ username });
  if (!user) {
    throw { code: 404, message: 'User not found' };
  }
  const session = new TherapySession(sessionData);
  await session.save();
  user.therapySessions.push(session);
  await user.save();
  return session;
};

exports.getTherapySessions = async (username) => {
  const user = await User.findOne({ username }).populate('therapySessions');
  if (!user) {
    throw { code: 404, message: 'User not found' };
  }
  return user.therapySessions;
};


