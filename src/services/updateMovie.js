import { MoviesDAO } from "../data-access/index.js";



export async function updateMovie(updatedMovie) {
    const result = await MoviesDAO.updateOne("movieDetails", updatedMovie);
    return result;
}