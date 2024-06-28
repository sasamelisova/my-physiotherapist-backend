const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  painLocation: { type: String, enum: ['knee', 'shoulder', 'back'], required: true },
  painIntensity: { type: Number, min: 0, max: 10, required: true },
  therapySessions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TherapySession' }]
});

UserSchema.statics.register = async function(username, password, painLocation, painIntensity) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new this({ username, password: hashedPassword, painLocation, painIntensity });
  return user.save();
};

UserSchema.statics.authenticate = async function(username, password) {
  const user = await this.findOne({ username });
  if (user && await bcrypt.compare(password, user.password)) {
    return user;
  }
  throw new Error('Invalid username or password');
};

module.exports = mongoose.model('User', UserSchema);
