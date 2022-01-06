import { CreateFarmerUseCase } from "../../../domain/usecases/farmer/create-farmer-usecase";
import { CreateFarmerRepository } from "../../ports/repositories/farmer/create-farmer-repository";

export class CreateFarmer implements CreateFarmerUseCase {
  constructor(private readonly repository: CreateFarmerRepository) {}

  execute(name: string): void {
    this.repository.createFarmer(name);
  }
}
