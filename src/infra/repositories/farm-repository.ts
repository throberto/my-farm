import { Knex } from "knex";

import { CreateFarmRepository } from "../../application/ports/repositories/farm/create-farm-repository";

export class FarmRepository implements CreateFarmRepository {
  constructor(private readonly knex: Knex) {}

  createFarm(name: string): void {
    throw new Error("Method not implemented.");
  }
}
