import {getAllMoviesCtrl} from "./getAllMoviesCtrl.js";
import { postAddNewMovieCtrl } from "./postaddNewMoviesCtrl.js";
import { deleteMovieCtrl } from "./deleteMovieCtrl.js";
import { putUpdateMovieCtrl } from "./putUpdateMovieCtrl.js";
import { getMovieByIdCtrl } from "./getMovieByIdCtrl.js";
import { getMovieBySearchCtrl } from "./getMovieBySearchCtrl.js";
import { getAllFavoriteMoviesCtrl } from "./getAllFavoritesCtrl.js";
import { postAddNewFavoriteMovieCtrl } from "./postAddNewFavoriteMovieCtrl.js";
import { deleteFavoriteMovieCtrl } from "./deleteFavoriteMovie.js";
import { putUpdateFavoriteMovieCtrl } from "./putUpdateFavoriteMovie.js";



export const MoviesController = {
    getAllMovies: getAllMoviesCtrl,
    postAddNewMovie: postAddNewMovieCtrl,
    deleteMovie: deleteMovieCtrl,
    putUpdateMovie: putUpdateMovieCtrl,
    getMoviebyId: getMovieByIdCtrl,
    getMovieBySearch: getMovieBySearchCtrl,
}

export const FavoritesController = {
    getAllFavoriteMovies: getAllFavoriteMoviesCtrl,
    postAddNewFavoriteMovie: postAddNewFavoriteMovieCtrl,
    deleteFavoriteMovie: deleteFavoriteMovieCtrl,
    putUpdateFavoriteMovie: putUpdateFavoriteMovieCtrl,
}