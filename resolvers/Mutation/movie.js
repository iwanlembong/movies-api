const { User, Movie, sequelize } = require('../../models');
const { APP_SECRET } = require('../utils');
const jwt = require('jsonwebtoken');
const { getUserId } = require('../utils');


const movie = {

    async addMovie(_, { title, descriptions, authorId, actorId }, context) {
        
        const userId = getUserId(context);

        try {
            const movie = await Movie.create({
                title,
                descriptions,
                authorId
            });

            const payload = {
                id: movie.id,
                title: movie.title,
                descriptions: movie.descriptions
            };

            const movieId = movie.id;

            //save to movie_actors
            if (userId) {
                const newMovieActor = await Movie_Actor.create({ movieId, actorId, userId});
            }

            const token = jwt.sign(payload, APP_SECRET);
            return { movie, token };
        } catch (err) {
            throw new Error(err.message);
        }
    },
    async removeMovie(_, { movieId }, context) {
        const userId = getUserId(context);
        const movie = await Movie.findOne({ where: { id: movieId } });

        if (movie) {
            const deleted = await movie.destroy();
            if (deleted) {
              return movie.id;
            }
            throw new Error('Not authorized');
          }
          throw new Error('Movie not found');
    },
}

module.exports = { movie }