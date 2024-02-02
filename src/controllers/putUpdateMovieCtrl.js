import { MoviesService } from "../services/index.js";




export async function putUpdateMovieCtrl(req, res) {
    const updatedMovie = req.body;
    const result = await MoviesService.updateMovie(updatedMovie);
    res.json({ success: true, result: result })
}