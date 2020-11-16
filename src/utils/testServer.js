import express from "express";
import supertest from "supertest";

function testServer(route) {
  const app = express();
  route(app);
  return supertest(app);
}

export default testServer;
