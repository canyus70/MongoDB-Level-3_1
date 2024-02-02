import { FavoriteService } from "../services/index.js";


export async function deleteFavoriteMovieCtrl(req, res) {

    try {
        const movieId = req.params.movieId;
        const result = await FavoriteService.removeFavoriteMovie(movieId);
        res.json({ success: true, result});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, error, message: error.message || "Couldn't delete favorite Movie"});
    }
    };