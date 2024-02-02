import { MoviesService } from "../services/index.js";


export async function deleteMovieCtrl(req, res) {

try {
    const movieId = req.params.movieId;
    const result = await MoviesService.removeMovie(movieId);
    res.json({ success: true, result});
} catch (error) {
    console.log(error);
    res.status(500).json({success: false, error, message: error.message || "Couldn't delete Movie"});
}
};