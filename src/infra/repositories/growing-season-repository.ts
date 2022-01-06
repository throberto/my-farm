import { Knex } from "knex";

import { CreateGrowingSeasonRepository } from "../../application/ports/repositories/growing-season/create-growing-season-repository";

export class GrowingSeasonRepository implements CreateGrowingSeasonRepository {
  constructor(private readonly knex: Knex) {}

  createGrowingSeason(culture: string, start: Date, end: Date): void {
    throw new Error("Method not implemented.");
  }
}
