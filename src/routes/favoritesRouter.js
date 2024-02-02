import express from "express";
import { FavoritesController } from "../controllers/index.js";

const favoritesRouter = express.Router();

favoritesRouter.get("/", FavoritesController.getAllFavoriteMovies);

favoritesRouter.post("/", express.json(), FavoritesController.postAddNewFavoriteMovie);

favoritesRouter.delete("/:movieId", FavoritesController.deleteFavoriteMovie);

favoritesRouter.put("/update", express.json(), FavoritesController.putUpdateFavoriteMovie);


export default favoritesRouter;