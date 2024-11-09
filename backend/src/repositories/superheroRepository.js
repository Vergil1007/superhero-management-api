class SuperheroRepository {
  constructor(model) {
    this.model = model;
  }

  async getAllSuperheroes() {
    return await this.model.findAll({
      order: [["id", "ASC"]],
    });
  }

  async getSuperheroById(id) {
    return await this.model.findByPk(id);
  }

  async createSuperhero(superheroData) {
    return await this.model.create(superheroData);
  }

  async updateSuperhero(id, superheroData) {
    const superhero = await this.getSuperheroById(id);
    if (superhero) {
      return await superhero.update(superheroData);
    }
    return null;
  }

  async deleteSuperhero(id) {
    const superhero = await this.getSuperheroById(id);
    if (superhero) {
      await superhero.destroy();
      return true;
    }
    return false;
  }
}

export default SuperheroRepository;
