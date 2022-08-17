import { AppDataSource } from "../../database/dataSource";
import { Video } from "../../entities/Videos";

export class DeleteVideosService {
  async execute(id: string) {
    const repo = AppDataSource.getRepository(Video);

    if (!(await repo.findOneBy({ id }))) {
      return new Error("Video Does not exists!");
    }

    await repo.delete(id);
  }
}
