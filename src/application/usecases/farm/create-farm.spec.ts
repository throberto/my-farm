import { CreateFarm } from "./create-farm";
import { Farm } from "../../../domain/entities/Farm";
import { CreateFarmRepository } from "../../ports/repositories/farm/create-farm-repository";

const createFarmMockRepository = (): CreateFarmRepository => {
  class CreateFarmRepositoryMock implements CreateFarmRepository {
    createFarm(_name: string): void {}
  }

  return new CreateFarmRepositoryMock();
};

const sutFactory = () => {
  const repository = createFarmMockRepository();
  const sut = new CreateFarm(repository);
  return { sut, repository };
};

const farmMockFactory = (): Farm => {
  const name = "My Farm";
  return new Farm(name);
};

describe("Create Farm", () => {
  it("Create a Farm", () => {
    const { sut, repository } = sutFactory();
    const farm = farmMockFactory();
    const spy = jest.spyOn(repository, "createFarm");
    sut.execute(farm.name);
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(farm.name);
  });
});
