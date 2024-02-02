import { MoviesDAO } from "../data-access/index.js";


export async function getMovieById(movieId) {
    const result= await MoviesDAO.getById("movieDetails", movieId);
    return result;
}