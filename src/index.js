import express from "express";
import config from "./config/index";
//routes
import movieApi from "./routes/movies";
import { logErrors, errorHandler } from "./utils/middleware/errorHandler";

const app = express();

//middlewares
app.use(express.json());
//app.use(logErrors());
//app.use(errorHandler());

//rutas
movieApi(app);

//ruta inicial
app.use("/", (req, res) => {
  res.json({
    Api: "con Node y MongoAtlas",
  });
});

app.listen(config.port, () =>
  console.log(`server run on port http://localhost:${config.port}`)
);
