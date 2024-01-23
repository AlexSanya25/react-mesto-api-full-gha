const jwt = require('jsonwebtoken');

const generateToken = (payload) => jwt.sign(payload, 'dev_secret', {
  expiresIn: 604800,
});

module.exports = generateToken;
