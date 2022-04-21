const mongoose = require('mongoose');
const { validationResult, matchedData } = require('express-validator');
const bcrypt = require('bcrypt');

const User = require('../models/User');
const State = require('../models/State');

module.exports = {
  signin: async (req, res) => {
    const erros = validationResult(req);

    if (!erros.isEmpty()) {
      res.json({ error: erros.mapped() });
      return;
    }

    const data = matchedData(req);

    //Validating email
    const user = await User.findOne({ email: data.email });
    if (!user) {
      res.json({ error: 'Email and/or password is incorrect.' });
      return;
    }

    //Validating password
    const match = await bcrypt.compare(data.password, user.password);
    if (!match) {
      res.json({ error: 'Email and/or password is incorrect.' });
      return;
    }

    const payload = (Date.now() + Math.random()).toString();
    const token = await bcrypt.hash(payload, 10);

    user.token = token;
    await user.save();

    res.json({ token, email: data.email });
  },
  signup: async (req, res) => {
    const erros = validationResult(req);

    if (!erros.isEmpty()) {
      res.json({ error: erros.mapped() });
      return;
    }

    const data = matchedData(req);

    const user = await User.findOne({
      email: data.email
    });
    if (user) {
      res.json({
        error: {
          email: { msg: 'Email already exists.' }
        }
      });
    }

    if (mongoose.Types.ObjectId.isValid(data.state)) {
      const stateItem = await State.findById(data.state);
      if (!stateItem) {
        res.json({
          error: { state: { msg: 'State does not exist.' } }
        });
        return;
      }
    } else {
      res.json({
          error: { state: { msg: 'State id is invalid.' } }
        });
        return;
    }
    
    const passwordHash = await bcrypt.hash(data.password, 10);

    const payload = (Date.now() + Math.random()).toString();
    const token = await bcrypt.hash(payload, 10);

    const newUser = new User({
      name: data.name,
      email: data.email,
      password: passwordHash,
      token,
      state: data.state,          
    });

    await newUser.save();

    res.json({ token });
  },
}