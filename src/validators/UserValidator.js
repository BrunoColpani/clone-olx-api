const {checkSchema } = require('express-validator');

module.exports = {
  editAction: checkSchema({
    token: {
      notEmpty: true
    },
    name: {
      optional: true,
      trim: true,
      isLength: {
        options: {min: 2}
      },
      errorMessage: 'Name must be at least 2 characters long.'
    },
    email: {
      optional: true,
      isEmail: true,
      normalizeEmail: true,
      errorMessage: 'Email is invalid.'
    },
    password: {
      optional: true,
      isLength: {
        options: {min: 5}
      },
      errorMessage: 'Password must be at least 5 characters long.'
    },
    state: {
      optional: true,
      notEmpty: true,
      errorMessage: 'State is empty.'
    }
  }),
};