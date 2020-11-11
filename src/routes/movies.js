import express from "express";
import moviesServices from "../services/movies";

function moviesApi(app) {
  //router para usar las rutas
  const router = express.Router();
  app.use("/api/movies", router);

  //se intancia el servicio
  const moviesService = new moviesServices();

  //listar todas las peliculas
  router.get("/", async (req, res, next) => {
    try {
      const movies = await moviesService.getMovies();
      res.status(200).json({
        data: movies,
        message: "peliculas listadas",
      });
    } catch (error) {
      console.log(error);
    }
  });

  //listar una pelicula
  router.get("/:movieId", async (req, res, next) => {
    try {
      const movie = await moviesService.getMovie();
      res.status(200).json({
        data: movie,
        message: "pelicula listada",
      });
    } catch (error) {
      console.log(error);
    }
  });

  //Crear pelicula
  router.post("/", async (req, res, next) => {
    try {
      const movie = moviesService.createMovie();
      res.status(201).json({
        data: movie,
        message: "pelicula creada",
      });
    } catch (error) {
      console.log(error);
    }
  });

  //Actualizar pelicula
  router.put("/:movieId", async (req, res, next) => {
    try {
      const movie = moviesService.updateMovie();
      res.status(200).json({
        data: movie,
        message: "pelicula actualizada",
      });
    } catch (error) {
      console.log(error);
    }
  });

  //Eliminar pelicula
  router.delete("/:movieId", async (req, res, next) => {
    try {
      const movie = moviesService.deleteMovie();
      res.status(200).json({
        data: movie,
        message: "pelicula eliminada",
      });
    } catch (error) {
      console.log(error);
    }
  });
}

export default moviesApi;
