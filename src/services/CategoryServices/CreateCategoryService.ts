import { AppDataSource } from "../../database/dataSource";
import { Category } from "../../entities/Category";

type CategoryRequest = {
  name: string;
  description: string;
};

export class CreateCategoryService {
  async execute({
    name,
    description,
  }: CategoryRequest): Promise<Category | Error> {
    const repo = AppDataSource.getRepository(Category);

    //SELECT * FROM Categories WHERE name = name LIMIT 1
    if (await repo.findOneBy({ name })) {
      return new Error("Category already exist");
    }
    const category = repo.create({
      name,
      description,
    });

    await repo.save(category);

    return category;
  }
}
