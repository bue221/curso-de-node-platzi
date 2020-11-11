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
    const { tags } = req.body; //estos son los hacen la consulta pelicula?=tramtruco
    try {
      const movies = await moviesService.getMovies({ tags });
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
    const movieId = req.params.movieId;
    try {
      const movie = await moviesService.getMovie(movieId);
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
    //const { body: movie } = req;
    const movie = req.body;
    console.log(req.body);
    try {
      const movieI = moviesService.createMovie(movie);
      res.status(201).json({
        data: movieI,
        message: "pelicula creada",
      });
    } catch (error) {
      console.log(error);
    }
  });

  //Actualizar pelicula
  router.put("/:movieId", async (req, res, next) => {
    const movieId = req.params.movieId;
    const movie = req.body;
    try {
      const movieI = moviesService.updateMovie(movieId, movie);
      res.status(200).json({
        data: movieI,
        message: "pelicula actualizada",
      });
    } catch (error) {
      console.log(error);
    }
  });

  //Eliminar pelicula
  router.delete("/:movieId", async (req, res, next) => {
    const movieId = req.params.movieId;
    try {
      const movie = moviesService.deleteMovie(movieId);
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
