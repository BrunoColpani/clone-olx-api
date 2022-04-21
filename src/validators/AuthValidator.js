const {checkSchema } = require('express-validator');

module.exports = {
  signup: checkSchema({
    name: {
      trim: true,
      isLength: {
        options: {min: 2}
      },
      errorMessage: 'Name must be at least 2 characters long.'
    },
    email: {
      isEmail: true,
      normalizeEmail: true,
      errorMessage: 'Email is invalid.'
    },
    password: {
      isLength: {
        options: {min: 5}
      },
      errorMessage: 'Password must be at least 5 characters long.'
    },
    state: {
      notEmpty: true,
      errorMessage: 'State is empty.'
    }
  }),
  sigin: checkSchema({
      email: {
      isEmail: true,
      normalizeEmail: true,
      errorMessage: 'Email is invalid.'
    },
    password: {
      isLength: {
        options: {min: 5}
      },
      errorMessage: 'Password must be at least 5 characters long.'
    },
  })
};