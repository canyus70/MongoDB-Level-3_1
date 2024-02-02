import { MoviesDAO } from "../data-access/index.js";



export async function updateFavoriteMovie(updatedMovie) {
    const result = await MoviesDAO.updateOne("favorite", updatedMovie);
    return result;
}