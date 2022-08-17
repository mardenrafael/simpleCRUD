import { AppDataSource } from "../../database/dataSource";
import { Category } from "../../entities/Category";

export class GetAllCategoryService {
  async execute() {
    const repo = AppDataSource.getRepository(Category);

    const categories = await repo.find();

    return categories;
  }
}
