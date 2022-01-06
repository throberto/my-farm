import { CreateFarmUseCase } from "../../../domain/usecases/farm/create-farm-usecase";
import { CreateFarmRepository } from "../../ports/repositories/farm/create-farm-repository";

export class CreateFarm implements CreateFarmUseCase {
  constructor(private readonly repository: CreateFarmRepository) {}

  execute(name: string): void {
    this.repository.createFarm(name);
  }
}
