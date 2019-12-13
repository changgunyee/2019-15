const userResolvers = require('./user');
const rankingResolvers = require('./ranking');
const friendResolvers = require('./friend');
const wordResolvers = require('./word');
const invitationResolvers = require('./invitation');

module.exports = [
  userResolvers,
  rankingResolvers,
  friendResolvers,
  wordResolvers,
  invitationResolvers,
];
