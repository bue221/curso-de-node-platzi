import assert from "assert";
import proxyquire from "proxyquire";

import {
  moviesMock,
  MoviesSeviceMock,
  filterByTag,
} from "../utils/mocks/movies";
import testServer from "../utils/testServer";

describe("Routes-movie", () => {
  const route = proxyquire("../../routes/movies", {
    "../services/movies": MoviesSeviceMock,
  });

  const request = testServer(route);
  describre("GET /movies", () => {
    it("should respond with status 200", (done) => {
      request.get("/api/movies").expect(200, done);
    });
  });
});
