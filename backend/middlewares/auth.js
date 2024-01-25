const jwt = require('jsonwebtoken');

// eslint-disable-next-line import/extensions
const NotAuthorizate = require('../utils/NotAuthorizate.js');

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const { JWT_SECRET, NODE_ENV } = process.env;

// eslint-disable-next-line func-names, consistent-return
module.exports = function (req, res, next) {
  let payload;
  try {
    const token = req.headers.authorization;
    if (!token) {
      throw new NotAuthorizate('С токеном что-то не так');
    }
    const validToken = token.replace('Bearer ', '');
    // eslint-disable-next-line no-unused-vars
    payload = jwt.verify(validToken, NODE_ENV !== 'production' ? 'jwt_secret' : JWT_SECRET);
  } catch (error) {
    next(new NotAuthorizate('С токеном что-то не так'));
  }
  req.user = payload;
  next();
};
