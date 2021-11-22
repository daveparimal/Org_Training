const Models = require("Models");

module.exports = class CreateAadhaarQuery {
  constructor(aadhaarNumber, userId) {
    this.details = {
      aadhaar_number: aadhaarNumber,
      userId: userId,
    };
  }

  get() {
    return Models.Aadhaar.create({
      aadhaar_number: this.details.aadhaar_number,
      userId: this.details.userId,
    });
  }
};
