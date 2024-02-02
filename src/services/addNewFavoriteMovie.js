import { MoviesDAO } from "../data-access/index.js";
import { makeNewMovie } from "../domain/index.js";



export async function addNewFavoriteMovie(add) {
    const newFavoriteMovie = makeNewMovie(add);
    const result = await MoviesDAO.insertOne("favorites",newFavoriteMovie);
    return result;
}