import { SpecificatiosRepository } from "../../repositories/implementations/SpecificatiosRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationRepository = new SpecificatiosRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationRepository
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { createSpecificationController };
