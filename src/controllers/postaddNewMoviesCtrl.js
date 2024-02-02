import { MoviesService } from "../services/index.js";


export async function postAddNewMovieCtrl(req, res) {
      try {
        const movieInfo = req.body;
        const result = await MoviesService.addNewFavoriteMovie(movieInfo);
        res.status(201).json({ success: true, result });
      } catch (error) {
        console.log(error);
        res.status(500).json({
          success: false,
          error,
          message: error.message || "Could not add Movie",
        });
      }
    };
