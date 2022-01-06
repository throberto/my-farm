import faker from "faker";

import { CreateGrowingSeason } from "./create-growing-season";
import { GrowingSeason } from "../../../domain/entities/GrowingSeason";
import { CreateGrowingSeasonRepository } from "../../ports/repositories/growing-season/create-growing-season-repository";

const createGrowingSeasonMockRepository = (): CreateGrowingSeasonRepository => {
  class CreateGrowingSeasonRepositoryMock
    implements CreateGrowingSeasonRepository
  {
    createGrowingSeason(_culture: string, _start: Date, _end: Date): void {}
  }

  return new CreateGrowingSeasonRepositoryMock();
};

const sutFactory = () => {
  const repository = createGrowingSeasonMockRepository();
  const sut = new CreateGrowingSeason(repository);
  return { sut, repository };
};

const growingSeasonMockFactory = (): GrowingSeason => {
  const culture = "Crop";
  const start = faker.date.recent();
  const end = faker.date.future();
  return new GrowingSeason(culture, start, end);
};

describe("Create Growing Season", () => {
  it("Create a Growing Season", () => {
    const { sut, repository } = sutFactory();
    const season = growingSeasonMockFactory();
    const spy = jest.spyOn(repository, "createGrowingSeason");
    sut.execute(season.culture, season.start, season.end);
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(season.culture, season.start, season.end);
  });
});
