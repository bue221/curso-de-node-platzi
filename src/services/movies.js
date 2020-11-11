import mock from "../utils/mocks/movies";
import MongoLib from "../lib/mongo";

class MoviesServices {
  constructor() {
    this.collection = "movies";
    this.MongoDB = new MongoLib();
  }

  //funciones de los metodos crud
  async getMovies({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const movies = await this.MongoDB.getAll(this.collection, query);
    return movies || [];
  }

  async getMovie(movieId) {
    const movie = await this.MongoDB.get(this.collection, movieId);
    return movie || {};
  }

  async createMovie(movie) {
    const newMovie = await this.MongoDB.create(this.collection, movie);
    return newMovie;
  }

  async updateMovie(movieId, movie) {
    const upMovie = await this.MongoDB.update(this.collection, movieId, movie);
    return upMovie;
  }

  async deleteMovie(movieId) {
    const delMovie = await this.MongoDB.delete(this.collection, movieId);
    return delMovie;
  }
}

export default MoviesServices;
