import express from "express";
import cors from "cors";
import morgan from "morgan";
import { favoritesRouter, moviesRouter, } from "./routes/index.js";


import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 7000;
const app = express();

app.use(cors());
app.use(morgan("dev"));

// express static

app.get("/", (_, res) => res.send("Jo hat geklappt"));

app.use("/api/v1/movies", moviesRouter.default);
app.use("/api/v1/favorites", favoritesRouter.default);
// app.use("/api/v1/files");
app.listen(PORT, () => console.log("Server läuft auf Port ", PORT))
