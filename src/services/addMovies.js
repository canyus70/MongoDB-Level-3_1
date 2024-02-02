import { MoviesDAO } from "../data-access/index.js";
import {  makeNewMovie } from "../domain/index.js";



export async function addNewMovie(add) {
    const newMovie = makeNewMovie(add);
    const result = await MoviesDAO.insertOne("movieDetails",newMovie);
    return result;
}