import { MoviesDAO } from "../data-access/index.js";



export async function removeFavoriteMovie(movieId) {
    const deletedMovie = await MoviesDAO.deletedById("favorite", movieId);
    return deletedMovie;
}