import Joi from "joi";
class SuperheroDTO {
  constructor({
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    images,
  }) {
    this.nickname = nickname;
    this.real_name = real_name;
    this.origin_description = origin_description;
    this.superpowers = superpowers;
    this.catch_phrase = catch_phrase;
    this.images = images;
  }

  static validate(data) {
    const schema = Joi.object({
      nickname: Joi.string().min(2).max(50).required().messages({
        "string.base": "Nickname must be a string",
        "string.empty": "Nickname cannot be empty",
        "string.min": "Nickname must be at least 2 characters long",
        "string.max": "Nickname must be no more than 50 characters long",
        "any.required": "Nickname is required",
      }),
      real_name: Joi.string().min(2).max(100).required().messages({
        "string.base": "Real name must be a string",
        "string.empty": "Real name cannot be empty",
        "string.min": "Real name must be at least 2 characters long",
        "string.max": "Real name must be no more than 100 characters long",
        "any.required": "Real name is required",
      }),
      origin_description: Joi.string().min(2).max(500).required().messages({
        "string.base": "Origin description must be a string",
        "string.empty": "Origin description cannot be empty",
        "string.min": "Origin description must be at least 2 characters long",
        "string.max":
          "Origin description must be no more than 500 characters long",
        "any.required": "Origin description is required",
      }),
      superpowers: Joi.string().min(2).max(500).required().messages({
        "string.base": "Superpowers must be a string",
        "string.empty": "Superpowers cannot be empty",
        "string.min": "Superpowers must be at least 2 characters long",
        "string.max": "Superpowers must be no more than 500 characters long",
        "any.required": "Superpowers is required",
      }),
      catch_phrase: Joi.string().min(2).max(500).required().messages({
        "string.base": "Catch phrase must be a string",
        "string.empty": "Catch phrase cannot be empty",
        "string.min": "Catch phrase must be at least 2 characters long",
        "string.max": "Catch phrase must be no more than 500 characters long",
        "any.required": "Catch phrase is required",
      }),
      images: Joi.array().items(Joi.string().uri()).required().messages({
        "array.base": "Images must be an array of strings",
        "string.uri": "Each image must be a valid URI",
        "any.required": "Images are required",
      }),
    });

    return schema.validate(data, { abortEarly: false });
  }
}

export default SuperheroDTO;
