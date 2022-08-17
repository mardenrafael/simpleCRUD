import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/CategoryServices/DeleteCategoryService";

export class DeleteCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new DeleteCategoryService();
    const result = await service.execute(id);

    if (result instanceof Error) {
      response.status(400).json(result.message);
    }

    response.status(204).end();
  }
}
