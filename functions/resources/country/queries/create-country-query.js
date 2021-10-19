const Models = require("models");

module.exports = class CreateCountryQuery {
  constructor(aadharId, name) {
    this.details = {
      aadharId,      
      name,
    };
  }

  get() {
    return Models.country.create({
      id: this.details.aadharId,
      name: this.details.name,
    });
  }
};
