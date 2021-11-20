const chai = require("chai");
const expect = chai.expect;
const {
  verifyResultOk,
  verifyResultError,
} = require("../../../helpers/verifiers");

const CreateUserValidation = require("resources/users/validators/create-user-validation");

describe.only("Create User Validation", () => {
  it("should mandate full name", async () => {
    const response = await CreateUserValidation.validate({});
    verifyResultError((error) => {
      expect(error.errorMessage).to.include("User name should not be empty");
    })(response);
  });

  it("should be a valid email", async () => {
    const response = await CreateUserValidation.validate({ email: "parimal@" });
    verifyResultError((error) => {
      expect(error.errorMessage).to.include(
        "User email should be a valid email address"
      );
    })(response);
  });

  it("should be a valid if all data provided", async () => {
    const response = await CreateUserValidation.validate({
      full_name: "hakuna 4",
      country_code: 32,
      aadhaar_id: 456,
      email: "haku4@gmail.com",
    });
    verifyResultOk(() => {})(response);
  });
});
