import { addNewMovie } from "./addMovies.js"
import { addNewFavoriteMovie } from "./addNewFavoriteMovie.js"
import { getAllFavoriteMovies } from "./getAllFavoriteMovies.js"
import { getAllMovies } from "./getAllMovies.js"
import { getMovieById } from "./getMovieById.js"
import { getMovieBySearchinput } from "./getMovieBySearchinput.js"
import { removeFavoriteMovie } from "./removeFavoriteMovie.js"
import { removeMovie } from "./removeMovie.js"
import { updateFavoriteMovie } from "./updateFavoriteMovie.js"
import { updateMovie } from "./updateMovie.js"


export const MoviesService = {
    getAllMovies,
    addNewMovie,
    removeMovie,
    updateMovie,
    getMovieById,
    getMovieBySearchinput,
};

export const FavoriteService = {
    getAllFavoriteMovies,
    addNewFavoriteMovie,
    removeFavoriteMovie,
    updateFavoriteMovie,
}