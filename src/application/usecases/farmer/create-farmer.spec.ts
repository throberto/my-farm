import { CreateFarmer } from "./create-farmer";
import { Farmer } from "../../../domain/entities/Farmer";
import { CreateFarmerRepository } from "../../ports/repositories/farmer/create-farmer-repository";

const createFarmerMockRepository = (): CreateFarmerRepository => {
  class CreateFarmerRepositoryMock implements CreateFarmerRepository {
    createFarmer(_name: string): void {}
  }

  return new CreateFarmerRepositoryMock();
};

const sutFactory = () => {
  const repository = createFarmerMockRepository();
  const sut = new CreateFarmer(repository);
  return { sut, repository };
};

const farmerMockFactory = (): Farmer => {
  const name = "My Farmer";
  return new Farmer(name);
};

describe("Create Farmer", () => {
  it("Create a Farmer", () => {
    const { sut, repository } = sutFactory();
    const farmer = farmerMockFactory();
    const spy = jest.spyOn(repository, "createFarmer");
    sut.execute(farmer.name);
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(farmer.name);
  });
});
