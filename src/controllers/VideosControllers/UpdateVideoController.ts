import { Request, Response } from "express";
import { UpdateVideoService } from "../../services/VideosServices/UpdateVideoService";

export class UpdateVideoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, duration, description, category_id } = request.body;
    const service = new UpdateVideoService();
    const result = await service.execute({
      id,
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
