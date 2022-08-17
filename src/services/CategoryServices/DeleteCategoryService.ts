import { AppDataSource } from "../../database/dataSource";
import { Category } from "../../entities/Category";

export class DeleteCategoryService {
  async execute(id: string) {
    const repo = AppDataSource.getRepository(Category);

    if (!(await repo.findOneBy({ id }))) {
      return new Error("This category does not exist");
    }

    await repo.delete(id);
  }
}
