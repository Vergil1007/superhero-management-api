import SuperheroDTO from "../../src/dto/SuperheroDTO.js";

describe("SuperheroDTO Validation", () => {
  it("should pass validation with correct data", () => {
    const validData = {
      nickname: "Superman",
      real_name: "Clark Kent",
      origin_description:
        "he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction…",
      superpowers:
        " solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight…",
      catch_phrase:
        "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
      images: ["http://example.com/image1.jpg"],
    };

    const { error } = SuperheroDTO.validate(validData);
    expect(error).toBeUndefined();
  });

  it("should fail validation if required field is missing", () => {
    const invalidData = {
      real_name: "Clark Kent",
      origin_description:
        "he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction…",
      superpowers:
        " solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight…",
      catch_phrase:
        "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
      images: ["http://example.com/image1.jpg"],
    };

    const { error } = SuperheroDTO.validate(invalidData);
    expect(error).toBeDefined();
    expect(error.details[0].message).toBe("Nickname is required");
  });

  it("should fail validation if catch_phrase is too short", () => {
    const invalidData = {
      nickname: "Superman",
      real_name: "Clark Kent",
      origin_description:
        "he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction…",
      superpowers:
        " solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight…",
      catch_phrase: "A",
      images: ["http://example.com/image1.jpg"],
    };

    const { error } = SuperheroDTO.validate(invalidData);
    expect(error).toBeDefined();
    expect(error.details[0].message).toBe(
      "Catch phrase must be at least 2 characters long"
    );
  });
});
