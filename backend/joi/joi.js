// eslint-disable-next-line import/no-extraneous-dependencies
const { Joi } = require('celebrate');

// eslint-disable-next-line import/extensions
const { regexUrl } = require('../utils/regex.js');

const createCardJoi = {
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().pattern(regexUrl).required(),
  }),
};

const cardIdJoi = {
  params: Joi.object().keys({
    cardId: Joi.string().hex().length(24).required(),
  }),
};

const signUpJoi = {
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(regexUrl),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
};

const signInJoi = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
};

const upAvatarJoi = {
  body: Joi.object().keys({
    avatar: Joi.string().pattern(regexUrl),
  }),
};

const userIdJoi = {
  params: Joi.object().keys({
    userId: Joi.string().length(24).hex().required(),
  }),
};

module.exports = {
  createCardJoi,
  cardIdJoi,
  signUpJoi,
  signInJoi,
  upAvatarJoi,
  userIdJoi,
};
