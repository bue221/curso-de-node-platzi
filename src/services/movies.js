import mock from "../utils/mocks/movies";

class MoviesServices {
  constructor() {
    this.collection = "movies";
    this.MongoDB = "";
  }

  //funciones de los metodos crud
  async getMovies() {
    const movies = await Promise.resolve(mock);
    return movies || [];
  }

  async getMovie() {
    const movie = await Promise.resolve(mock.moviesMock[1]);
    return movie || {};
  }

  async createMovie() {
    const newMovie = await Promise.resolve(mock.moviesMock[2]);
    return newMovie;
  }

  async updateMovie() {
    const upMovie = await Promise.resolve(mock.moviesMock[3]);
    return upMovie;
  }

  async deleteMovie() {
    const delMovie = await Promise.resolve(mock.moviesMock[1].id);
    return delMovie;
  }
}

export default MoviesServices;
