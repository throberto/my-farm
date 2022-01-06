import { CreateGrowingSeasonUseCase } from "../../../domain/usecases/growing-season/create-growing-season-usecase";
import { CreateGrowingSeasonRepository } from "../../ports/repositories/growing-season/create-growing-season-repository";

export class CreateGrowingSeason implements CreateGrowingSeasonUseCase {
  constructor(private readonly repository: CreateGrowingSeasonRepository) {}

  execute(culture: string, start: Date, end: Date): void {
    this.repository.createGrowingSeason(culture, start, end);
  }
}
