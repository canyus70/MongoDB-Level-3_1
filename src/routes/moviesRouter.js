import express from "express";
import { MoviesController } from "../controllers/index.js";

const moviesRouter = express.Router();

moviesRouter.get("/", MoviesController.getAllMovies);

moviesRouter.get("/:movieId", MoviesController.getMoviebyId);

moviesRouter.get("/search/:searchinput", MoviesController.getMovieBySearch);

moviesRouter.post("/", express.json(), MoviesController.postAddNewMovie);

moviesRouter.delete("/:movieId", MoviesController.deleteMovie);

moviesRouter.put("/update", express.json(), MoviesController.putUpdateMovie);




export default moviesRouter;