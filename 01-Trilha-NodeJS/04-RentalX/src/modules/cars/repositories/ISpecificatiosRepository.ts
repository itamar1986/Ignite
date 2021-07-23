import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificatiosRepository {
  create({ description, name }: ICreateSpecificationDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificatiosRepository, ICreateSpecificationDTO };
