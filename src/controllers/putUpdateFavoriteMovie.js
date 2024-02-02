import { FavoriteService } from "../services/index.js";



export async function putUpdateFavoriteMovieCtrl(req, res) {
    const updatedMovie = req.body;
    const result = await FavoriteService.updateFavoriteMovie(updatedMovie);
    res.json({ success: true, result: result })
}