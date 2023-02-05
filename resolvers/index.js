const Query = require('./Query')
const { auth } = require('./Mutation/auth')
const { movie } = require('./Mutation/movie')

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...movie,
  },
}