import express from "express";
import config from "./config/index";
//routes
import movieApi from "./routes/movies";

const app = express();

//middlewires
app.use(express.json());

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
