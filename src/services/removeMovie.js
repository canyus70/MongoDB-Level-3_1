import { MoviesDAO } from "../data-access/index.js";


export async function removeMovie(movieId) {
    const deletedMovie = await MoviesDAO.deletedById("movieDetails", movieId);
    return deletedMovie;
}