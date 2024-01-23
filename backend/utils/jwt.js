const jwt = require('jsonwebtoken');

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const { JWT_SECRET } = process.env;
const generateToken = (payload) => jwt.sign(payload, JWT_SECRET, {
  expiresIn: 604800,
});

module.exports = generateToken;
