import { Request, Response } from "express";
import { DeleteVideosService } from "../../services/VideosServices/DeleteVideosService";

export class DeleteVideosController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new DeleteVideosService();
    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    response.status(204).end();
  }
}
