import { Request, Response } from "express";
import { CreateVideosService } from "../../services/VideosServices/CreateVideoService";

export class CreateVideosController {
  async handle(request: Request, response: Response) {
    const { name, duration, description, category_id } = request.body;

    const service = new CreateVideosService();
    const result = await service.execute({
      name,
      duration,
      description,
      category_id,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
