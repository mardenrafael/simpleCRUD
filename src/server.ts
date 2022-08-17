import "reflect-metadata";
import express from "express";
import "./database/dataSource";
import { categoryRoutes } from "./routes/CategoryRoutes";
import { videoRoutes } from "./routes/VideosRoutes";

const app = express();

app.use(express.json());
app.use(categoryRoutes);
app.use(videoRoutes);

app.listen(3000, () => {
  console.log("Server runnig");
});
