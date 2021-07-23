import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { SpecificatiosRepository } from "../../modules/cars/repositories/implementations/SpecificatiosRepository";
import { ISpecificatiosRepository } from "../../modules/cars/repositories/ISpecificatiosRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificatiosRepository>(
  "SpecificatiosRepository",
  SpecificatiosRepository
);
