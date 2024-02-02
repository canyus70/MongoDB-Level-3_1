import { MoviesDAO } from "../data-access/index.js";

export async function getAllFavoriteMovies() {
    const movies = await MoviesDAO.findAll("favorites");
    return movies.map((movie) => asMovieListItem(movie));
};

function asMovieListItem(movie) {
    return {
        _id: movie._id,
        title: movie.title,
        director: movie.director,
        poster: movie.poster,
        plot: movie.plot,
        imdb: movie.imdb?.rating,
        runtime: movie.runtime,
    }
};