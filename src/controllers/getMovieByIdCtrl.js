import { MoviesService } from "../services/index.js";



export async function getMovieByIdCtrl(req, res) {
    try {
        const result = await MoviesService.getMovieById(req.params.movieId);
        res.json({ success: true, result});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error,
            message: error.message || "Zonk: Konnte nicht auf Movies zugreifen"
        })
    }
}