import { FavoriteService  } from "../services/index.js"


export async function getAllFavoriteMoviesCtrl(_, res) {
    try {
        const result = await FavoriteService.getAllFavoriteMovies();
        res.json({ success: true, result});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error,
            message: error.message || "Zonk: Konnte nicht auf Movies zugreifen"
        })
    }
};