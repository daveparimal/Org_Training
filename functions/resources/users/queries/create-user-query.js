const Models = require("Models");

module.exports = class CreateUserQuery {
  constructor(full_name, country_code, aadhaar_id, email) {
    this.details = {
      full_name,
      country_code,
      aadhaar_id,
      email,
    };
  }

  get() {
    return Models.Users.create({
      full_name: this.details.full_name,
      country_code: this.details.country_code,
      aadhaar_id: this.details.aadhaar_id,
      email: this.details.email,
    });
  }
};
