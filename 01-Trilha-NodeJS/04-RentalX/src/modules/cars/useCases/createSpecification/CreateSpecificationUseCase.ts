import { inject, injectable } from "tsyringe";

import { ISpecificatiosRepository } from "../../repositories/ISpecificatiosRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificatiosRepository
  ) {}
  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.specificationRepository.findByName(name);
    if (specificationAlreadyExists) {
      throw new Error("Specification already exists!");
    }

    this.specificationRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
