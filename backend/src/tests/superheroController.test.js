import httpMocks from "node-mocks-http";
import * as superheroController from "../controllers/superheroController.js";

jest.mock("../controllers/superheroController.js", () => ({
  getAllSuperheroes: jest.fn().mockResolvedValue([
    {
      id: 1,
      nickname: "Superman",
      real_name: "Clark Kent",
      origin_description: "Krypton",
      superpowers: "Super strength",
      catch_phrase: "Up in the sky!",
      images: ["http://example.com/image1.jpg"],
    },
  ]),
  createSuperhero: jest.fn().mockResolvedValue({
    id: 2,
    nickname: "Batman",
    real_name: "Bruce Wayne",
    origin_description: "Gotham",
    superpowers: "Wealth and gadgets",
    catch_phrase: "I am vengeance",
    images: ["http://example.com/image2.jpg"],
  }),
  updateSuperhero: jest.fn().mockResolvedValue({
    id: 1,
    nickname: "Superman",
    real_name: "Clark Kent",
    origin_description: "Earth",
    superpowers: "Super strength",
    catch_phrase: "Look up in the sky!",
    images: ["http://example.com/image1.jpg"],
  }),
  deleteSuperhero: jest.fn().mockResolvedValue(true),
}));

describe("Superhero Controller", () => {
  it("should return a list of superheroes", async () => {
    const req = {};
    const res = httpMocks.createResponse();

    await superheroController.getAllSuperheroes(req, res);

    expect(res.statusCode).toBe(200);

    expect(res._getJSONData()).toEqual([
      {
        id: 1,
        nickname: "Superman",
        real_name: "Clark Kent",
        origin_description: "Krypton",
        superpowers: "Super strength",
        catch_phrase: "Up in the sky!",
        images: ["http://example.com/image1.jpg"],
      },
    ]);
  });

  it("should create a new superhero", async () => {
    const req = {
      body: {
        nickname: "Batman",
        real_name: "Bruce Wayne",
        origin_description: "Gotham",
        superpowers: "Wealth and gadgets",
        catch_phrase: "I am vengeance",
        images: ["http://example.com/image2.jpg"],
      },
    };
    const res = httpMocks.createResponse();

    await superheroController.createSuperhero(req, res);

    expect(res.statusCode).toBe(200);
    expect(res._getJSONData().nickname).toBe("Batman");
  });

  it("should update an existing superhero", async () => {
    const req = {
      params: { id: 1 },
      body: {
        nickname: "Superman",
        real_name: "Clark Kent",
        origin_description: "Earth",
        superpowers: "Super strength",
        catch_phrase: "Look up in the sky!",
        images: ["http://example.com/image1.jpg"],
      },
    };
    const res = httpMocks.createResponse();

    await superheroController.updateSuperhero(req, res);

    expect(res.statusCode).toBe(200);
    expect(res._getJSONData().nickname).toBe("Superman");
  });

  it("should delete a superhero", async () => {
    const req = { params: { id: 1 } };
    const res = httpMocks.createResponse();

    await superheroController.deleteSuperhero(req, res);

    expect(res.statusCode).toBe(200);
  });

  it("should handle errors and return 500 for create", async () => {
    jest
      .spyOn(superheroController, "createSuperhero")
      .mockRejectedValue(new Error("Database error"));

    const req = {
      body: {
        nickname: "Batman",
        real_name: "Bruce Wayne",
        origin_description: "Gotham",
        superpowers: "Wealth and gadgets",
        catch_phrase: "I am vengeance",
        images: ["http://example.com/image2.jpg"],
      },
    };
    const res = httpMocks.createResponse();

    await superheroController.createSuperhero(req, res);

    expect(res.statusCode).toBe(500);
    expect(res._getJSONData()).toEqual({ message: "Error adding superhero" });
  });
});
