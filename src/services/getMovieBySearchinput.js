import { MoviesDAO } from "../data-access/index.js";


export async function getMovieBySearchinput(searchinput) {
    const result = await MoviesDAO.getBySearchinput("movieDetails", searchinput);
    return result;
}