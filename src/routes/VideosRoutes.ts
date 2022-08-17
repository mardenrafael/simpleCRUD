import { Router } from "express";
import { CreateVideosController } from "../controllers/VideosControllers/CreateVideoController";
import { DeleteVideosController } from "../controllers/VideosControllers/DeleteVideoController";
import { GetAllVideosController } from "../controllers/VideosControllers/GetAllVideoController";
import { UpdateVideoController } from "../controllers/VideosControllers/UpdateVideoController";

const videoRoutes = Router();

videoRoutes.post("/videos", new CreateVideosController().handle);
videoRoutes.get("/videos", new GetAllVideosController().handle);
videoRoutes.delete("/videos/:id", new DeleteVideosController().handle);
videoRoutes.put("/videos/:id", new UpdateVideoController().handle);

export { videoRoutes };
