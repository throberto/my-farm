import { Knex } from "knex";

import { CreateFarmerRepository } from "../../application/ports/repositories/farmer/create-farmer-repository";

export class FarmerRepository implements CreateFarmerRepository {
  constructor(private readonly knex: Knex) {}

  createFarmer(name: string): void {
    throw new Error("Method not implemented.");
  }
}
