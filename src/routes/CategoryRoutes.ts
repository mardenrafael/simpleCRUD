import { Router } from "express";
import { CreateCategoryController } from "../controllers/CategoryControllers/CreateCategoryControllers";
import { DeleteCategoryController } from "../controllers/CategoryControllers/DeleteCategoryController";
import { GetAllCategoryController } from "../controllers/CategoryControllers/GetAllCategoryControllers";
import { UpdateCategoryController } from "../controllers/CategoryControllers/UpdateCategoryController";

const categoryRoutes = Router();

categoryRoutes.post("/categories", new CreateCategoryController().handle);
categoryRoutes.get("/categories", new GetAllCategoryController().handle);
categoryRoutes.delete(
  "/categories/:id",
  new DeleteCategoryController().handle
);
categoryRoutes.put(
  "/categories/:id",
  new UpdateCategoryController().handle
);

export { categoryRoutes };
