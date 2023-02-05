const { User, Movie_Actor, sequelize } = require('../../models');
const { getUserId } = require('../utils');

const movie_actor = {
  async addMovieActor(_, { movieId, actorId }, context) {
    const userId = getUserId(context);
    if (userId) {
      const user = await User.findOne({
        where: { id: userId },
        include: [
          {
            model: Movie_Actor,
            as: 'movie_actor'
          }
        ]
      });
      if (user.movie_actors.find(movie_actor => movie_actor.movieId == movieId)) {
        throw new Error('Cannot vote twice');
      }
      const newMovieActor = await Movie_Actor.create({ movieId, actorId, userId});
      return newMovieActor.id;
    }
    throw new Error('Not authorized');
  },

  async removeMovieActor(_, { movieId, actorId }, context) {
    const userId = getUserId(context);
    const movie_actor = await Movie_Actor.findOne({ where: { movieId, actorId, userId } });
    if (userId && movie_actor && userId == movie_actor.userId) {
      const deleted = await movie_actor.destroy();
      if (deleted) {
        return movie_actor.id;
      }
      throw new Error('Not authorized');
    }
    throw new Error('Movie Actor not found');
  },
}

module.exports = { movie_actor }